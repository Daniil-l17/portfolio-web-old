import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Header } from "../components/Header/Header"


export const Layout = ({children}:{children:React.ReactNode}) => {
  const queryClide = new QueryClient()
  return (
      <QueryClientProvider client={queryClide}>
        <Header/>
      {children}
      </QueryClientProvider>
  )
}
