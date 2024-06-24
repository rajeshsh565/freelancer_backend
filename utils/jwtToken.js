import jwt from "jsonwebtoken";

export const createJwtToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWTSECRET, {
        expiresIn: "30d"
    });
    return token;
}

export const verifyJwtToken = (token) => {
    return jwt.verify(token, process.env.JWTSECRET);
}