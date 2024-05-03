import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {LoadingGitHubRepoPage} from '../components/LoadingGitHubRepoPage/LoadingGitHubRepoPage'
import {useEffect, useState} from 'react'
import {GitGubRepo} from '../types/GitHubRepo'
import dayjs from 'dayjs'
import relativetim from 'dayjs/plugin/relativeTime'
import {localeObject} from '../utils/dayjs/localObject'
import {Button} from '../components/Button/Button'
import { Loading } from '../components/Loading/Loading'
dayjs.extend(relativetim)

const directionSort = [
  {title: 'по возрастанию', link: 'asc'},
  {title: 'по убыванию', link: 'desc'},
] as const
const sortBy = [
  {title: 'по созданию', link: 'created'},
  {title: 'по обновлению', link: 'updated'},
  {title: 'по названию', link: 'full_name'},
] as const

export default function GitHubRepo() {
  const [count, setCount] = useState(5)
  const [open, setOpen] = useState(false)
  const [direction, setDirection] = useState<'asc' | 'desc' | string>('asc')
  const [sort, setSort] = useState<
    'created' | 'updated' | 'full_name' | string
  >('created')
  const {data, refetch, isRefetching, isLoading} = useQuery({
    queryKey: ['gitHubRepo'],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      return (
        await axios.get<GitGubRepo[]>(
          `https://api.github.com/users/Daniil-l17/repos?per_page=${count}&sort=${sort}&direction=${direction}`,
        )
      ).data
    },
  })

  useEffect(() => {
    if (data) {
      refetch()
    }
  }, [count, sort, direction])

  const update = () => {
    setCount((prev) => prev + 5)
  }

  console.log(data)

  return (
    <div className=" mt-10 min-h-[100vh]">
      <div className="min-h-[100vh] mx-4 ">
        <div className=" gap-16 justify-center min-h-[100vh]  flex w-auto max-w-[1400px] m-auto flex-col">
          <div className="flex relative justify-between items-center">
            <h2 className=" text-2xl">GitHub репозитории</h2>
            <Button func={() => setOpen((prev) => !prev)} title="сортировать" />
            <div
              className={` ${
                open ? 'opacity-100' : 'opacity-0'
              } visible flex flex-col gap-3 bg-[#333] rounded-md py-4 px-2 right-0 top-10 w-[115px] absolute`}
            >
              <div className="flex flex-col gap-3">
                {directionSort.map((item) => (
                  <p
                    onClick={() => setDirection(item.link)}
                    className={`cursor-pointer ${
                      direction === item.link ? 'text-[#1df96a93]' : ''
                    }`}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
              <span className=" w-full h-[2px] bg-[#598270]"></span>
              <div className="flex flex-col gap-3">
                {sortBy.map((item) => (
                  <p
                    onClick={() => setSort(item.link)}
                    className={`cursor-pointer ${
                      sort === item.link ? 'text-[#3e1df693]' : ''
                    }`}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className=" justify-center flex flex-wrap gap-10">
            {isLoading ? (
              <div className='flex justify-center'>
                <Loading/>
              </div>
            ) : (
              data?.map((repo) => (
                <div className=" shadow-2xl shadow-[#f0f0f0] w-52 px-4 py-2 rounded">
                  <h3 className=" text-sm font-bold">{repo.name}</h3>
                  {/*<div>{repo.topics}</div>*/}
                  <div className="flex justify-end">
                    <p className="text-xs text-[#7d7c7e] font-bold">
                      {dayjs(repo['pushed_at']).locale(localeObject).fromNow()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          {!isLoading && !isRefetching ? (
            <div className="flex justify-center">
              <Button func={update} title="Загрузить еще" />
            </div>
          ) : null}
          {isRefetching && data?.length ? <LoadingGitHubRepoPage /> : null}
        </div>
      </div>
    </div>
  )
}
