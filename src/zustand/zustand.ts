import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ITheme {
  theme: 'ligth' | 'dark'
  openBurger: boolean
  toggleBurgerMenu: () => void
  togleTheme: () => void
}

export const useTheme = create(
  persist<ITheme>(
    set => ({
      theme: 'dark',
      openBurger: false,
      togleTheme: () =>
        set(state => ({
          ['theme']: state['theme'] === 'ligth' ? 'dark' : 'ligth',
        })),
        toggleBurgerMenu: () => set(state => ({
          openBurger: !state.openBurger
        }))
    }),
    {
      name: 'theme',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
