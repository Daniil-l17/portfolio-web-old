
import style from './technologies.module.scss'

const technologies = [
  {name: 'redux-toolkit && RTK Query', img: 'redux.png', interest: '80'},
  {name: 'React', img: 'react.png', interest: '90'},
  {name: 'TypeScript', img: 'Long=True.png', interest: '70'},
  {name: 'Tailwind', img: 'Type=Default.png', interest: '90'},
  {name: 'JavaScript', img: 'Type=Default.svg', interest: '70'},
  {name: 'Nextjs', img: 'nextjs-icon-512x512-wbsw4aug.png', interest: '80'},
  {
    name: 'TanStack Query',
    img: 'react-query-logo-1340EA4CE9-seeklogo.com.png',
    interest: '60',
  },
  {name: 'Zustand', img: 'zustand.png', interest: '70'},
] as const

export const Technologies = () => {

  return (
    <div
      id="technologies"
      className={`${style.technologies} max-[1060px]:min-h-max max-[1400px]:pt-10`}
    >
      <h2>Технологии</h2>
      <div className="flex justify-center max-w-[1400px] gap-5 flex-wrap">
        {technologies.map((item, index) => (
          <div key={index} className='card'>
            <a className="text-current no-underline" >
              <div className="icon">
                <img width={40} src={`/${item.img}`} alt="" />
              </div>
              <p className="title text-current">{item.name}</p>
              <p className="text text-current font-bold">{item.interest}%</p>
            </a>
          </div>
        ))}
      </div>
      <p className="text-[#7d7c7e]">и так далее....</p>
    </div>
  )
}
