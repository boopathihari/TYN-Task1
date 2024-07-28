import React, { useEffect, useState, Suspense } from 'react';
import { Card, Button } from "flowbite-react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SkeletonCard from './SkeletonCard';

interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
}

interface CompanyListProps {
  viewType: "card" | "list";
  companies: Company[];
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

const CompanyList: React.FC<CompanyListProps> = ({ viewType, companies = [] }) => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const response = await fetch('https://tyn-task1.onrender.com/api/bookmarks');
      const data = await response.json();
      setBookmarks(data.map((bookmark: { companyId: string }) => bookmark.companyId));
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    }
  };

  const toggleBookmark = async (companyId: string) => {
    if (bookmarks.includes(companyId)) {
      try {
        const response = await fetch(`https://tyn-task1.onrender.com/api/bookmarks/${companyId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setBookmarks(bookmarks.filter(id => id !== companyId));
        }
      } catch (error) {
        console.error('Error removing bookmark:', error);
      }
    } else {
      try {
        const response = await fetch('https://tyn-task1.onrender.com/api/bookmarks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ companyId }),
        });
        if (response.ok) {
          const data = await response.json();
          setBookmarks([...bookmarks, data.companyId]);
        }
      } catch (error) {
        console.error('Error adding bookmark:', error);
      }
    }
  };

  return (
    <div>
      {companies.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-400">No data found for the selected filter</p>
        </div>
      ) : viewType === "card" ? (
        <div className="card-view">
          <div className="flex gap-4 mt-6 flex-wrap">
            {companies.map(card => (
              <Link to={`/profile/${card.id}`} key={card.id} className="w-[100%] md:w-[48%] lg:w-[32%]">
                <Suspense fallback={<SkeletonCard />}>
                  <Card className="h-[100%] relative hover:border hover:border-[#22b8cf] hover:border-1 cursor-pointer">
                    <img
                      src={card.logo}
                      alt="Company Logo"
                      className="w-24 h-24 mx-auto object-cover"
                    />
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        toggleBookmark(card.id);
                      }}
                      className="absolute flex justify-center items-center border border-[#495057] hover:border-[#0c8599] hover:text-[#0c8599] hover:bg-[#e3fafc] cursor-pointer top-3 left-3 w-10 h-10 rounded-full"
                    >
                      {bookmarks.includes(card.id) ? (
                        <FaBookmark className="w-5 h-5" />
                      ) : (
                        <FaRegBookmark className="w-5 h-5" />
                      )}
                    </span>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {truncateText(card.name, 60)}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-sm line-clamp-3">
                      {truncateText(card.description, 90)}
                    </p>
                    <Button className="bg-[#15aabf]">Connect</Button>
                  </Card>
                </Suspense>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="list-view mt-10">
          {companies.map(card => (
            <Link to={`/profile/${card.id}`} key={card.id}>
              <div className="flex flex-row items-center gap-4 bg-white p-6 rounded-lg shadow-sm mb-4 border hover:border hover:border-[#22b8cf] cursor-pointer">
                <img
                  src={card.logo}
                  alt="Company Logo"
                  className="sm:w-24 sm:h-24 w-12 h-12 object-cover"
                />
                <div className="flex-1">
                  <h5 className="sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white hidden sm:block">
                    {truncateText(card.name, 30)}
                  </h5>
                  <h5 className="sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white block sm:hidden">
                    {truncateText(card.name, 10)}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-sm sm:block hidden">
                    {truncateText(card.description, 90)}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:flex-row flex-col-reverse">
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      toggleBookmark(card.id);
                    }}
                    className="flex justify-center items-center border border-[#495057] hover:border-[#0c8599] hover:text-[#0c8599] hover:bg-[#e3fafc] cursor-pointer w-10 h-10 rounded-full"
                  >
                    {bookmarks.includes(card.id) ? (
                      <FaBookmark className="w-5 h-5" />
                    ) : (
                      <FaRegBookmark className="w-5 h-5" />
                    )}
                  </span>
                  <Suspense fallback={<SkeletonCard />}>
                    <Button className="bg-[#15aabf]">Connect</Button>
                  </Suspense>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyList;
