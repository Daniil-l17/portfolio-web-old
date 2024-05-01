import { About } from '../components/About/About';
import { Project } from '../components/Project/Project';
import { Technologies } from '../components/Technologies/Technologies';
import { Сontacts } from '../components/contacts/Сontacts';

export default function Home() {
  const prods = () => {
    window.scroll(0, 0);
  };

  return (
    <div>
      <About />
      <Technologies />
      <Project />
      <Сontacts />
      <span onClick={prods} className=" fixed bottom-[26px] right-[48px]">
        вверх
      </span>
    </div>
  );
}
