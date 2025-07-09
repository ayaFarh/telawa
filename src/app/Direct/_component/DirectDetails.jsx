"use client"
import { getAllDirect } from '@/lib/redux/slices/directSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import QuranPlayer from './QuranPlayer';

export default function DirectDetails() {
  const { direct, loading, error } = useSelector(state => state.direct);
  const [selectedLive, setSelectedLive] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDirect());
  }, []);

  const handelLive = (index) => {
    setSelectedLive(index);
  };

  return (
    <div className="text-white space-y-4">
      <div className="flex flex-wrap gap-2">
        {direct.livetv?.map((item, index) => (
          <div key={index}
            className={`px-4 py-2 cursor-pointer rounded ${
              selectedLive === index ? "bg-[rgb(68,68,68)]" : "bg-[rgb(34,34,34)]"
            }`}
            onClick={() => handelLive(index)}
          >
            {item.name}
          </div>
        ))}
      </div>

      
{direct.livetv?.[selectedLive] && (
       <QuranPlayer url={direct.livetv[selectedLive].url}/>
      )}
  
      
    </div>
  );
}
