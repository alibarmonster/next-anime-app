import { getAnimeResponse } from '@/app/libs/api.libs';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Image from 'next/image';

const Page = async ({ params }: any) => {
  const anime = await getAnimeResponse(`anime/${params.id}`);
  console.log(anime);
  return (
    <>
      <div className='pt-4 px-4'>
        <h3 className='text-color-primary'>
          {anime.data.title} - {anime.data.year} - {anime.data.season}
        </h3>
      </div>

      <div className='pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto'>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p2'>
          <h3>Score</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p2'>
          <h3>Popularity</h3>
          <p>{anime.data.popularity}</p>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p2'>
          <h3>episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>

      <div className='pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-4 text-color-primary'>
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className='w-full rounded object-cover'
        />
        <p className='text-justify md:text-xl text-sm'>{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
