import Link from 'next/link';

const Header = ({ title, linkHref, linkTitle }: any) => {
  return (
    <div className='p-4 flex items-center justify-between'>
      <h1 className='text-2xl font-bold text-color-white'>{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className='md:text-xl text-md underline hover:text-color-primary transition-all text-color-white'
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
