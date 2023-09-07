import { trpc } from './trpc'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Router from './Router'
function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc'
        })
      ]
    })
  })

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient} >
          <Router />
      </QueryClientProvider>

    </trpc.Provider>
  )
}

export default App
