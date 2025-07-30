// components/ReaderDetailsSkeleton.jsx
import React from "react";

const Skeleton = ({ className }) => (
  <div className={`bg-gray-700 animate-pulse rounded ${className}`} />
);

export default function ReaderDetailsSkeleton() {
  return (
    <div className="space-y-6">
      {/* العنوان */}
      <Skeleton className="w-1/2 h-10" />

      {/* أزرار المصحف */}
      <div className="flex gap-3 flex-wrap">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="w-24 h-8 " />
        ))}
      </div>

      {/* قائمة السور */}
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-2 py-2"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="w-8 h-6" />
              <Skeleton className="w-12 h-12 rounded" />
              <Skeleton className="w-32 h-5" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="w-6 h-6" />
              <Skeleton className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
