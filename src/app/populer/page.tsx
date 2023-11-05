/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
'use client';

import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import { useEffect, useState } from 'react';

const Page = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    const animes = await response.json();
    setData(animes);
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
        lastPage={data.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
