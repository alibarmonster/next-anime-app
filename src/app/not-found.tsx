import Link from 'next/link';

const Page = () => {
  return (
    <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
      <div className='flex justify-center items-center flex-col gap-4'>
        <h3 className='text-color-primary text-2xl'>Waduh, tujuanmu nggak ada!</h3>
        <p className='text-color-primary md:text-xl sm:text-lg'>
          Mungkin kamu salah jalan atau alamat
        </p>
        <Link
          href='/'
          className='flex items-center justify-center bg-color-primary font-semibold py-2 px-4 rounded-lg  hover:bg-color-grey'
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
