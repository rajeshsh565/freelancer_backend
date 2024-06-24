import bcrypt from "bcryptjs";
export const hash = async(password) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}
export const verify = async(password, hashedPassword) => {
    const isCorrect = await bcrypt.compare(password, hashedPassword);
    return isCorrect;
}