import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';

const Page = async ({ params }: any) => {
  const { keyword } = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();
  const decodedKeyword = decodeURIComponent(keyword);

  return (
    <>
      <section>
        <Header title={`pencarian untuk ${decodedKeyword} ....`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
