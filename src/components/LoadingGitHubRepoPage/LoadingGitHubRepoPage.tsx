import style from './loadingGitHubRepoPage.module.scss'

export const LoadingGitHubRepoPage = () => {
  return (
    <div className='flex justify-center '>
      <div className={style.loadingWave}>
    <div className={style.loadingBar}></div>
    <div className={style.loadingBar}></div>
    <div className={style.loadingBar}></div>
    <div className={style.loadingBar}></div>
  </div>
    </div>
  )
}
