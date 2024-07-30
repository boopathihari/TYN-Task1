import React, { useEffect, useState } from 'react';
import { Card, Button } from "flowbite-react";
import { FaBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Header2 from './Header2';

interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

const BookmarkList: React.FC = () => {
  const [bookmarkedCompanies, setBookmarkedCompanies] = useState<Company[]>([]);

  useEffect(() => {
    fetchBookmarkedCompanies();
  }, []);

  const fetchBookmarkedCompanies = async () => {
    try {
      const response = await fetch('https://tyn-task1.onrender.com/api/bookmarked-companies');
      const data = await response.json();
      setBookmarkedCompanies(data.companies);
    } catch (error) {
      console.error('Error fetching bookmarked companies:', error);
    }
  };

  const removeBookmark = async (companyId: string) => {
    try {
      const response = await fetch(`https://tyn-task1.onrender.com/api/bookmarks/${companyId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setBookmarkedCompanies(bookmarkedCompanies.filter(company => company.id !== companyId));
      }
    } catch (error) {
      console.error('Error removing bookmark:', error);
    }
  };

  return (
    <div>
      <Header2 />
      <div className="mt-10 w-[90%] mx-auto my-0">
        <h2 className="text-2xl font-semibold mb-6">Bookmarked Companies</h2>
        {bookmarkedCompanies.length === 0 ? (
          <p className="text-center text-lg">No bookmarks found</p>
        ) : (
          <div className="flex gap-4 flex-wrap">
            {bookmarkedCompanies.map(company => (
              <Link to={`/profile/${company.id}`} key={company.id} className="sm:w-[24%] w-[100%]">
                <Card className="h-[100%] relative hover:border hover:border-[#22b8cf] hover:border-1 cursor-pointer">
                  <img
                    src={company.logo}
                    alt="Company Logo"
                    className="w-24 h-24 mx-auto object-cover"
                  />
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      removeBookmark(company.id);
                    }}
                    className="absolute flex justify-center items-center border border-[#495057] hover:border-[#0c8599] hover:text-[#0c8599] hover:bg-[#e3fafc] cursor-pointer top-3 left-3 w-10 h-10 rounded-full"
                  >
                    <FaBookmark className="w-5 h-5" />
                  </span>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {truncateText(company.name, 60)}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-sm line-clamp-3">
                    {truncateText(company.description, 90)}
                  </p>
                  <Button className="bg-[#15aabf]">Connect</Button>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarkList;
