import { AnimeDTO } from '@/DTO/AnimeDTO';
import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api }: any) => {
  return (
    <div className='grid md:grid-cols-5 sm:grid-cols-3  grid-cols-2 gap-4 px-4 '>
      {api?.data?.map((anime: any, index: number) => {
        return (
          <div
            className='shadow-xl  rounded-md '
            key={anime.mal_id}
          >
            <Link
              href={`/anime/${anime.mal_id}`}
              className='cursor-pointer  text-color-white transition-opacity hover:text-color-primary'
            >
              <Image
                src={anime.images.webp.image_url}
                alt='picture'
                width={350}
                height={350}
                className='w-full max-h-64 object-cover rounded-md'
              />
              <h3 className='font-bold  text-md p-2 '>{anime.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
