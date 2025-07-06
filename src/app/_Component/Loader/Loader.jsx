import React from 'react'
import Image from 'next/image';

export default function Loader() {
  return (
    <div className="radar-spinner">
  <div className="circle">
    <div className="circle-inner-container">
      <div className="circle-inner"></div>
    </div>
  </div>

  <div className="circle">
    <div className="circle-inner-container">
      <div className="circle-inner"></div>
    </div>
  </div>

  <div className="circle">
    <div className="circle-inner-container">
      <div className="circle-inner"></div>
    </div>
  </div>

  <div className="circle">
    <div className="circle-inner-container">
      <div className="circle-inner"></div>
    </div>
  </div>
</div>
  )
}
