import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {LoadingGitHubRepoPage} from '../components/LoadingGitHubRepoPage/LoadingGitHubRepoPage'
import {useEffect, useState} from 'react'

export default function GitHubRepo() {
  const [count, setCount] = useState(5)
  const {data, refetch, isRefetching,isLoading} = useQuery({
    queryKey: ['gitHubRepo'],
    queryFn: async () => {
      return (
        await axios.get(
          `https://api.github.com/users/Daniil-l17/repos?per_page=${count}`,
        )
      ).data
    },
  })


  useEffect(() => {
    if (data) {
      refetch()
    }
  }, [count])

  const update = () => {
    setCount((prev) => prev + 5)
  }

  return (
    <div className=" mt-10 min-h-[100vh]">
      <div className="min-h-[100vh] flex-col flex justify-center items-center">
        {
          isLoading ? <p>loading....</p> :
          //@ts-ignore
          data?.map((el) => (
            <p key={el.id}>{el.name}</p>
          ))
        }
        {!isLoading && <button onClick={update}>загрузить еще</button> }
        {isRefetching && data ? <LoadingGitHubRepoPage /> : null}
      </div>
    </div>
  )
}
