import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ITheme {
  theme: 'ligth' | 'dark';
  togleTheme: () => void;
}

export const useTheme = create(
  persist<ITheme>(
    set => ({
      theme: 'dark',
      togleTheme: () =>
        set(state => ({
          ['theme']: state['theme'] === 'ligth' ? 'dark' : 'ligth',
        })),
    }),
    {
      name: 'theme',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
