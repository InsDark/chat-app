import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import {router, createContext} from './trpc'
import {postRoutes} from './routes/post'
import cors from 'cors'

const app = express()

const appRouter = router({
    post: postRoutes
})

app.use(cors())

app.use('/trpc', trpcExpress.createExpressMiddleware({
    router:appRouter,
    createContext
}))

export type AppRouter = typeof appRouter

export default app