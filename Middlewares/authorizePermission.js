export const authorizePermission = (...roles) => {
    return (req, res, next)=>{
        if (!roles.includes(req.user.role))
        {
            return res.status(401).json({msg: "Unauthorized Route!"})
        }
    next();
    }
}