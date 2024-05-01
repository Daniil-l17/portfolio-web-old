import { useQuery } from '@tanstack/react-query'
import style from './project.module.scss'
import axios from 'axios'

export const Project = () => {
  const {data} = useQuery({
    queryKey: ['gitTrepo'],
    queryFn: async () => {
      const data = (await axios.get('https://api.github.com/users/Daniil-l17/repos')).data
      return data
    }
  })

  console.log(data)
  

  return (
    <div id='project' className={style.project}>Project</div>
  )
}
