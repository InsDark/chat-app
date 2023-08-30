import {publicProcedure, router} from './../trpc'


const getPosts = publicProcedure.query(() => {
    return []
})

export const postRoutes =  router({
    get: getPosts
})