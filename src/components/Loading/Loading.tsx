import style from './loading.module.scss'

export const Loading = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loader}>
        <div className={`${style.bar1} spin`}></div>
        <div className={`${style.bar2} spin`}></div>
        <div className={`${style.bar3} spin`}></div>
        <div className={`${style.bar4} spin`}></div>
        <div className={`${style.bar5} spin`}></div>
        <div className={`${style.bar6} spin`}></div>
        <div className={`${style.bar7} spin`}></div>
        <div className={`${style.bar8} spin`}></div>
        <div className={`${style.bar9} spin`}></div>
        <div className={`${style.bar10} spin`}></div>
        <div className={`${style.bar11} spin`}></div>
        <div className={`${style.bar12} spin`}></div>
      </div>
    </div>
  )
}
