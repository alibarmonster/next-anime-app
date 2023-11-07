'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton = () => {
  const darkLight = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      className='flex justify-center items-center p-4'
      onClick={darkLight}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='h-10 w-10 text-color-primary' />
      ) : (
        <MoonIcon className='h-10 w-10 text-color-secondary' />
      )}
    </button>
  );
};

export default ThemeButton;
