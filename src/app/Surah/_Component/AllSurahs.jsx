
"use client"
import Loader from '@/app/_Component/Loader/Loader';
import { getAllSurah } from '@/lib/redux/slices/surhSlice';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function AllSurahs() {
  const { surah, loading, error } = useSelector(state => state.surah);
  const dispatch = useDispatch();
console.log(surah);

  useEffect(() => {
    dispatch(getAllSurah());
  }, []);

  return (
    <div className='text-white space-y-4'>
      <h3 className='text-4xl font-bold hover:underline'>جميع السور</h3>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader  />
        </div>
      ) : (
        <div className='grid grid-cols-3 md:grid-cols-4 max-[388px]:grid-cols-2 lg:grid-cols-6 gap-4'>
          {surah.map((surah) => (
            <Link
              key={surah.id}
              href={`/Surah/${surah.id}/${encodeURIComponent(surah.name)}`}
              className="reader-card flex flex-col items-center justify-center px-1 py-3 hover:bg-[rgb(42,42,42)] transition-all duration-100 rounded"
            >
              <div className='group bg-gradient-to-b from-gray-500 to-green-900 w-[120px] h-[120px] rounded flex items-center justify-center'>
                <h3 className='text-xl font-semibold line-clamp-1'>{surah.name}</h3>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-lg line-clamp-1'>{surah.name}</h3>
                <h3 className='text-lg text-gray-400'>
                  {surah.makkia ? "سوره مكية" : "سوره مدنية"}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
