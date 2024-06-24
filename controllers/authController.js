import User from "../Models/User.js";
import { hash, verify } from "../utils/hashPassword.js";
import { createJwtToken } from "../utils/jwtToken.js";

//Register
export const register = async(req,res) => {
    const {name, email, password, address, role} = req.body;
    const hashedPassword = await hash(password);
    const user = await User.create({name, email, password:hashedPassword, address, role});
    res.status(201).json({msg: "User Created!"});
}
//Login
export const login = async(req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({msg:"invalid login!"});
    }
    const isPwdCorrect = await verify(password, user.password);
    if (isPwdCorrect) {
        const token = createJwtToken({user:user._id, role: user.role});
        const oneDay = 24 * 60 * 60 * 1000;
        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now()+(oneDay*3))
        })
        res.status(200).json({msg: `Welcome ${user.name}`});
    }
    else {
        res.status(401).send("wrong password");
    }
}
//Logout
export const logout = async(req,res) => {
    res.cookie("token", "dadadada", {
        httpOnly:true,
        expires: new Date(Date.now())
    });
    res.status(200).send("Logout Success");
}