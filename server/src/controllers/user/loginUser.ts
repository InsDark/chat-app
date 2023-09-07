import Token from "../../models/token"
import User from "../../models/user"
import jwt from 'jsonwebtoken'

export const loginUser = async ({ input }: { input: { email: string | null, uid: string } }) => {
    try {
        const userExist = await User.findOne({ email: input.email, uid: input.uid })
        if (userExist) {

            const privateKey: string = process.env.JWT_KEY || ""
            const tokenExists = await Token.findOne({ email: input.email, uid: input.uid })

            if (tokenExists) return tokenExists

            const jwtToken = jwt.sign({ email: input.email, uid: input.uid }, privateKey || "", { expiresIn: "24h" })
            const token = new Token({ token: jwtToken, email: input.email, uid: input.uid })
            await token.save()
            return token
        }
        return null
    } catch (e) {
        return e
    }

}