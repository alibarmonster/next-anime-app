'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    event?.preventDefault();
    const keyword = searchRef.current.value;
    if (keyword.trim() !== '') {
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className='relative'>
      <input
        placeholder='cari animee??'
        className='w-full p-2 rounded'
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
