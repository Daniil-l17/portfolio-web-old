import {useEffect, useState} from 'react'
import {Project} from '../components/Project/Project'
import {Technologies} from '../components/Technologies/Technologies'
import {Greetings} from '../components/Greetings/Greetings'
import {About} from '../components/About/About'
import {ArrorUp} from '../utils/icon/ArrorUp'
import {Header} from '../components/Header/Header'

export default function Home() {
  const [viseble, setViseble] = useState(false)
  const prods = () => {
    window.scroll(0, 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop >= 915) return setViseble(true)
      setViseble(false)
    })
  }, [])

  return (
    <div className=" min-h-[100vh]">
      <Greetings />
      <About />
      <Technologies />
      <Project />
      {viseble && <ArrorUp prods={prods} />}
    </div>
  )
}
