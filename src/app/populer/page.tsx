/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
'use client';

import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import { useEffect, useState } from 'react';
import { getAnimeResponse } from '../libs/api.libs';

interface AnimeData {
  pagination: {
    last_visible_page: number;
  };
}

const Page = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<AnimeData | null>(null);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse('top/anime', `page=${page}`);
    setData(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler Page #${page}`} />
      <AnimeList api={data} />
      <Pagination
        page={page}
        lastPage={data?.pagination?.last_visible_page ?? 1}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
