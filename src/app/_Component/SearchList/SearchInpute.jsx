"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReader } from '@/lib/redux/slices/readerSlice';
import Link from 'next/link';

export default function SearchInpute({ onSelectReader }) {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const containerRef = useRef(null); 
  const { allReaders, loading } = useSelector((state) => state.reader);

  useEffect(() => {
    if (allReaders.length === 0) {
      dispatch(getAllReader(""));
    }
  }, [dispatch, allReaders.length]);

  const filteredReaders = search.trim()
    ? allReaders.filter((r) => r.name.includes(search))
    : [];

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-4 relative w-full" ref={containerRef}>
      <input
        type="text"
        placeholder="ابحث عن قارئ"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 rounded-full outline-none bg-[rgb(34,34,34)] text-white placeholder:text-gray-400"
      />

      {search.trim() !== '' && filteredReaders.length > 0 && (
        <div className="absolute mt-1 w-full bg-white rounded shadow-lg max-h-60 overflow-y-auto z-50">
          {filteredReaders.map((item) => (
            <Link
              key={item.id}
              href={`/Reader/${item.id}`}
              onClick={() => {
                setSearch("");
                if (onSelectReader) onSelectReader();
              }}
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100 border-b border-gray-200 last:border-0"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
