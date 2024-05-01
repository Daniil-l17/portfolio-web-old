import {Link} from 'react-router-dom'
import style from './header.module.scss'
import {useTheme} from '../../zustand/zustand'
import {useLayoutEffect} from 'react'
const menu = [
  {name: 'Главная', link: ''},
  {name: 'Обо мне', link: '#about'},
  {name: 'Технологии', link: '#technologies'},
  {name: 'Проекты', link: '#project'},
  {name: 'GitHub Репозитории', link: 'repo'},
  {name: 'Контакты', link: '#contacts'},
] as const

export const Header = () => {
  const {theme, togleTheme} = useTheme()



  useLayoutEffect(() => {
    if (theme === 'dark') document.body.classList.add('darkTheme')
    else document.body.classList.remove('darkTheme')
  }, [theme])

  return (
    <header style={theme === 'ligth' ? {background: 'rgba(240, 240, 240, 0.71)'} : {background: '#1a1919b5'}} className={style.header}>
      <h1 onClick={togleTheme}>Daniil.dev</h1>
      <ul className={style.menu}>
        {menu.map((item, index) => {
          if (item.name === 'GitHub Репозитории') {
            return (
              <li key={index}>
                <Link replace to={`/${item.link}`}>
                  {item.name}
                </Link>
              </li>
            )
          }
          if (item.name === 'Главная') {
            return (
              <li key={index}>
                <Link replace to={`/${item.link}`}>
                  {item.name}
                </Link>
              </li>
            )
          }
          return (
            <li key={index}>
              <a href={`/${item.link}`}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
