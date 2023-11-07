'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    event?.preventDefault();
    const keyword = searchRef.current?.value;
    if (keyword && keyword.trim() !== '') {
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className='relative '>
      <input
        placeholder='cari animee eg Naruto'
        className='w-full p-2 rounded dark:bg-color-secondary'
        ref={searchRef}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : null)}
      />
      <button
        className='absolute top-2 end-1'
        onClick={handleSearch}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
