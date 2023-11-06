import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';

const Pagination = ({ page, lastPage, setPage }: any) => {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState: number) => prevState - 1);
    scrollTop();
  };
  return (
    <div className='flex justify-center items-center py-4 px-2 gap-4 text-color-white text-2xl'>
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className='transition-all hover:text-color-primary'
        >
          <CaretCircleLeft
            size={40}
            weight='fill'
          />
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className='transition-all hover:text-color-primary'
        >
          <CaretCircleRight
            size={40}
            weight='fill'
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
