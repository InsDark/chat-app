import {createTRPCReact} from '@trpc/react-query'
import {AppRouter} from '../../server/src/app'

export const trpc = createTRPCReact<AppRouter>()