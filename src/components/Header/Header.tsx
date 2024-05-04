import {Link, useLocation} from 'react-router-dom'
import style from './header.module.scss'
import {useTheme} from '../../zustand/zustand'
import {memo, useLayoutEffect, useState} from 'react'

const menu = [
  {name: 'Главная', link: ''},
  {name: 'Обо мне', link: '#about'},
  {name: 'Технологии', link: '#technologies'},
  {name: 'Проекты', link: '#project'},
  {name: 'GitHub Репозитории', link: 'repo'},
] as const
export const Header = memo(() => {
  const {theme, togleTheme} = useTheme()
  const [open, setOpen] = useState(false)

  const locale = useLocation()

  console.log(locale)

  useLayoutEffect(() => {
    if (theme === 'dark') document.body.classList.add('darkTheme')
    else document.body.classList.remove('darkTheme')
  }, [theme])

  return (
    <header
      style={
        theme === 'ligth'
          ? {background: 'rgba(240, 240, 240, 0.71)'}
          : {background: '#1a1919b5'}
      }
      className={`${style.header}`}
    >
      <h1 onClick={togleTheme}>Daniil.dev</h1>
      <label onClick={() => setOpen((prev) => !prev)} className="hamburger">
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
        <div
          className={` ${
            open ? 'opacity-100' : 'opacity-0'
          } visible gap-4 px-2 items-start py-3 rounded flex flex-col w-[8rem] bg-[#9e9e9ed7] absolute left-[-94px] right-0 top-[47px]`}
        >
          {menu.map((item, index) => {
            if (item.name === 'GitHub Репозитории') {
              return (
                <Link
                  key={index}
                  className={`no-underline ${
                    locale.pathname === '/repo' && 'text-green-500'
                  } text-current`}
                  replace
                  to={`/${item.link}`}
                >
                  {item.name}
                </Link>
              )
            }
            if (item.name === 'Главная') {
              return (
                <Link
                  key={index}
                  onClick={() => window.scroll(0, 0)}
                  className={`no-underline ${
                    locale.hash === '' && locale.pathname === '/'
                      ? 'text-green-500'
                      : ''
                  }  text-current`}
                  replace
                  to={`/${item.link}`}
                >
                  {item.name}
                </Link>
              )
            }
            return (
              <a
                key={index}
                className={`no-underline ${
                  locale.hash === item.link && locale.pathname === '/'
                    ? 'text-green-500'
                    : ''
                }  text-current`}
                href={`/${item.link}`}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      </label>
      <ul className={`${style.menu} dismida `}>
        {menu.map((item, index) => {
          if (item.name === 'GitHub Репозитории') {
            return (
              <li key={index}>
                <Link
                  className={`${
                    locale.pathname === '/repo'
                      ? style.activeMenu
                      : style.noActiveMenu
                  } `}
                  replace
                  to={`/${item.link}`}
                >
                  {item.name}
                </Link>
              </li>
            )
          }
          if (item.name === 'Главная') {
            return (
              <li onClick={() => window.scroll(0, 0)} key={index}>
                <Link
                  className={`${
                    locale.hash === '' && locale.pathname === '/'
                      ? style.activeMenu
                      : style.noActiveMenu
                  } `}
                  replace
                  to={`/${item.link}`}
                >
                  {item.name}
                </Link>
              </li>
            )
          }
          return (
            <li key={index}>
              <a
                className={`${
                  locale.hash === item.link && locale.pathname === '/'
                    ? style.activeMenu
                    : style.noActiveMenu
                } `}
                href={`/${item.link}`}
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
})
