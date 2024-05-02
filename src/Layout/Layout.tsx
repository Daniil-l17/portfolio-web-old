import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Header} from '../components/Header/Header'
import {Suspense} from 'react'
import {Loading} from '../components/Loading/Loading'

export const Layout = ({children}: {children: React.ReactNode}) => {
  const queryClide = new QueryClient()

  return (
    <QueryClientProvider client={queryClide}>
      <Header />
      <span className="blur1"></span>
      <span className="blur2"></span>
        <Suspense fallback={<Loading />}>{children}</Suspense>
    </QueryClientProvider>
  )
}
