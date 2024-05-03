import {useTheme} from '../../zustand/zustand'
import style from './about.module.scss'

export const About = () => {
  const {theme} = useTheme()

  const themeShadow =
    theme === 'dark'
      ? 'px-6 w-auto cursor-pointer mx-2 max-w-2xl m-auto py-4 rounded shadow-2xl  shadow-[#ffffff]'
      : 'px-6 w-auto cursor-pointer mx-2 max-w-2xl m-auto py-4 rounded shadow-2xl  shadow-[#111111]'

  return (
    <div id="about" className={style.about}>
      {/*      <h2 className=" pt-14 text-center text-4xl">Подробнее</h2>*/}
      <div className={themeShadow}>
        <div className="flex gap-6 mb-3">
          <div className="flex items-center gap-2">
            <span className=" w-3 h-3 rounded-xl bg-[#ff0000]"></span>
            <span className=" w-3 h-3 rounded-xl bg-[#00ff00]"></span>
          </div>
          <h4 className=" text-[#5a6bed]">Bio.tsx</h4>
        </div>
        <p className=" mb-3 selection:text-[#85eb9f] selection:bg-[#46574b]">
          Мне нравиться создавать красивые и сложные проекты, делать анимацию и
          логику. Мой основной стек: TypeScript, ReactJS и NextJS.
        </p>
        <p className=" mb-3  selection:text-[#85eb9f] selection:bg-[#46574b]">
          Люблю разбираться в сложных проектах, продумывать логику, от запроса
          данных до рендора. Во время разработки важную часть уделяю визуальным
          составляющим и красоте кода. Каждый день стараюсь совершенствовать
          навыки и повышать уровень знаний.
        </p>
        <p className="selection:text-[#85eb9f] mb-2 selection:bg-[#46574b]">
          Также фанат оптимизации, фундаментального подхода и кофе.
        </p>
      </div>
    </div>
  )
}
