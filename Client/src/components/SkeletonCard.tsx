import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="animate-pulse flex flex-col p-4 border rounded-lg shadow-md">
      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-4"></div>
      <div className="h-10 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonCard;
