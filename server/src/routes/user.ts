import { publicProcedure, router } from './../trpc'
import { z } from 'zod'
import User from './../models/user'
import {loginUser as LoginController} from './../controllers/user/loginUser'

const getUser = publicProcedure.input(z.object({
    email: z.string()
})).query(async ({ input }) => {
    const user = await User.findOne({ email: input.email })
    return user
})

const addFriend = publicProcedure.input(z.object({
    friendEmail: z.string(),
    userEmail: z.string().nullable()
})).mutation(async ({ input }) => {
    const friendExist = await User.findOne({ email: input.friendEmail })
    if (!friendExist) return "Your friend doesnt exists"
    const isFriend = await User.find({ email: input.userEmail, friends: { $in: [input.friendEmail] } })
    if (!isFriend.length) {
        await User.updateOne({ email: input.userEmail }, { $push: { friends: input.friendEmail } })
        await User.updateOne({ email: input.friendEmail }, { $push: { friends: input.userEmail } })
        return "You added a new friend"
    } else {
        return `${input.friendEmail} is already your friend`
    }
})

const loginUser = publicProcedure.input(z.object({
    email: z.string().nullable(),
    uid: z.string()
})).mutation(async ({ input }) => {
    const res = await LoginController({input})
    return res
})

const createUser = publicProcedure.input(z.object({
    name: z.string().nullable(),
    email: z.string().nullable(),
    uid: z.string(),
    picture: z.string().nullable()
})).mutation(async ({ input }) => {
    const userExists = await User.find({ email: input.email })
    if (userExists.length) {
        throw Error("The user exists")
    }
    const newUser = new User({ ...input, friends: [] })
    newUser.save()
    return newUser

})

const getContacts = publicProcedure.input(z.object({
    uid: z.string()
})).query(async ({ input }) => {
    const user = await User.findOne({ uid: input.uid })
    return user
})



export const userRoutes = router({
    get: getUser,
    post: createUser,
    login: loginUser,
    addFriend,
    getContacts
})