import style from './header.module.scss';
const menu = [
  { name: 'Главная', link: '' },
  { name: 'Обо мне', link: 'about' },
  { name: 'Технологии', link: 'technologies' },
  { name: 'Проекты', link: '' },
  { name: 'Контакты', link: '' },
] as const;
export const Header = () => {
  return (
    <header className={style.header}>
      <h1>Daniil.dev</h1>
      <ul className={style.menu}>
        {menu.map((item, index) => (
          <li key={index}>
            <a href={`/#${item.link}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};
