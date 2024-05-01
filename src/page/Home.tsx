import {useEffect, useState} from 'react'
import {About} from '../components/About/About'
import {Project} from '../components/Project/Project'
import {Technologies} from '../components/Technologies/Technologies'
import {Сontacts} from '../components/contacts/Сontacts'
import {UpButton} from '../components/upButton/UpButton'

export default function Home() {
  const [viseble, setViseble] = useState(false)
  const prods = () => {
    window.scroll(0, 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop >= 915) {
        setViseble(true)
      } else setViseble(false)
    })
  }, [])

  console.log(viseble)

  return (
    <div className=" min-h-[100vh]">
      <About />
      <Technologies />
      <Project />
      <Сontacts />
      {viseble && <UpButton prods={prods} />}
    </div>
  )
}
