import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import {router, createContext} from './trpc'
import { tokenRoutes} from './routes/token'
import cors from 'cors'
import { userRoutes } from './routes/user'
import {Server} from 'socket.io'
import http from 'http'

const app = express()



const appRouter = router({
    token: tokenRoutes,
    user: userRoutes
})

app.use(cors())

app.use('/trpc', trpcExpress.createExpressMiddleware({
    router:appRouter,
    createContext
}))

export const server = http.createServer(app)

export const io = new Server(server, {
    cors: {origin: '*'}
})

const Connections = new Map()

io.on('connect', (socket) => {
    socket.on('new', (data) => {
        console.log(data)
    })
    socket.on('sendMessage', (data) => {
        console.log(data)
    } )
})


export type AppRouter = typeof appRouter

export default server