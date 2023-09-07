import { publicProcedure, router } from '../trpc'
import { z } from 'zod'
import Token from './../models/token'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const validateToken = publicProcedure.input(z.object({
    token: z.string()
})).query(async ({ input }) => {
    const tokenExist = Token.findOne({ token: input.token })
    if (!tokenExist) {
        return { token: null }
    }

    return { token: tokenExist }
})

const createToken = publicProcedure.input(z.object({
    email: z.string(),
    uid: z.string()
})).mutation(async ({ input }) => {
    const tokenExists = Token.findOne({ email: input.email, uid: input.uid })
    const privateKey : string = process.env.JWT_KEY || ""
    if (tokenExists) {
        const { token } = tokenExists
        const validToken = jwt.verify(token, privateKey, {complete: true})
        console.log(validToken)
        return token
    }
    const jwtToken = jwt.sign({ email: input.email, uid: input.uid }, privateKey || "", { expiresIn: "24h" })
    const token = new Token({ token: jwtToken, email: input.email, uid: input.uid })
    await token.save()
    return { token }
})

export const tokenRoutes = router({
    validate: validateToken,
    create: createToken
})