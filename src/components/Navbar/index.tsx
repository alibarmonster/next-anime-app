import Link from 'next/link';
import InputSearch from './InputSearch';
import ThemeButton from '../ThemeButton';

const Navbar = () => {
  return (
    <header className='bg-whiteTheme-secondary dark:bg-color-navbar'>
      <div className='flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center'>
        <Link
          href='/'
          className='font-bold text-white text-2xl'
        >
          ANIMELIEST
        </Link>
        <ThemeButton />
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
