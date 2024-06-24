import { verifyJwtToken } from "../utils/jwtToken.js";

export const validateUser = (req, res, next) => {
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({msg:"invalid login!"});
    }
    try {
        const {id, role} = verifyJwtToken(token);
        req.user = {id, role}
        next()
    } catch (error) {
        res.status(401).json({msg:"invalid token!"});
    }
};
