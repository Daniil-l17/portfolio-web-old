import style from './project.module.scss'

export const Project = () => {
  return (
    <div id='project' className={style.project}>
      <div className=' w-auto pt-20 m-auto flex justify-center items-center'>
        <h2>Мои проекты</h2>
      </div>
    </div>
  )
}
