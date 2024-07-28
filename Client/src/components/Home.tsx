import React, { useEffect, useState, Suspense } from 'react';
import Header from "./Header.tsx";
import SearchBar from './SearchBar.tsx';
import Accordion from './Accordion.tsx';
import ViewType from '../components/ViewType.tsx';
import SkeletonCard from '../components/SkeletonCard.tsx'; // Import the skeleton component
import { IoMdClose, IoMdArrowUp } from "react-icons/io";

// Define the Company interface
interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
}

// Lazy load the CompanyList component
const CompanyList = React.lazy(() => import('../components/CompanyList.tsx'));

const Home: React.FC = () => {
  const [activeView, setActiveView] = useState<"card" | "list">("card");
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [checkedState, setCheckedState] = useState<{ [key: string]: { [item: string]: boolean } }>({});
  const [, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<Company[]>([]);
  const [showScroll, setShowScroll] = useState(false); // State for showing scroll button

  useEffect(() => {
    fetchData();
  }, [selectedFilters, searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFilterChange = (category: string, item: string, isSelected: boolean) => {
    setSelectedFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      if (isSelected) {
        if (!updatedFilters[category]) {
          updatedFilters[category] = [];
        }
        if (!updatedFilters[category].includes(item)) {
          updatedFilters[category].push(item);
        }
      } else {
        updatedFilters[category] = updatedFilters[category].filter(filterItem => filterItem !== item);
        if (updatedFilters[category].length === 0) {
          delete updatedFilters[category];
        }
      }
      return updatedFilters;
    });

    setCheckedState(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [item]: isSelected
      }
    }));
  };

  const constructQueryString = (filters: { [key: string]: string[] }, search: string) => {
    const query = Object.entries(filters)
      .map(([key, values]) => {
        const formattedKey = key.toLowerCase().replace(/\s+/g, '');
        return `${formattedKey}=${values.join(',')}`;
      })
      .join('&');

    return query + (search ? `&search=${encodeURIComponent(search)}` : '');
  };

  const fetchData = async () => {
    setLoading(true);
    const queryString = constructQueryString(selectedFilters, searchTerm);
    console.log(queryString);
    try {
      const response = await fetch(`https://tyn-task1.onrender.com/api/companies?${queryString}`);
      const data = await response.json();
      setCompanies(data.companies);
      setResults(data.companies);
    } catch (error) {
      console.error('Error fetching company data:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setSelectedFilters({});
    setCheckedState({});
    setSearchTerm('');
    fetchData(); // Fetch all data without filters
  };

  const handleRemoveFilter = (category: string, item: string) => {
    handleFilterChange(category, item, false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=' w-full mb-10'>
      <Header results={results} setResults={setResults} />

      <div className='w-[90%] mx-auto my-0 sm:flex gap-x-4 px-4 sm:mt-10 mb-10 mt-6'>

        {/* Filter Section */}
        <section className='w-full sm:w-[25%] text-[14px]'>
          <Accordion onFilterChange={handleFilterChange} checkedState={checkedState} />
        </section>

        <div className='w-[100%] sm:p-4 py-4 sm:hidden '>
          <SearchBar setResults={setResults} />
        </div>

        {/* Companies List */}
        <section className='CardList sm:w-[75%] w-[100%] sm:mt-0 mt-4'>
          <div className='sm:flex justify-between items-center flex-none '>
            <h1 className='  text-[#495057] font-medium sm:text-3xl lg:text-[2.4rem]'>Growth Tech Firms</h1>
            <div className='mt-2 sm:mt-0'>
              <ViewType activeView={activeView} setActiveView={setActiveView} />
            </div>
          </div>

          {/* Selected Filters */}
          <div className='flex flex-wrap gap-2 mt-4'>
            {Object.entries(selectedFilters).map(([category, items]) =>
              items.map(item => (
                <div key={`${category}-${item}`} className='flex text-[#22b8cf] items-center border border-[#22b8cf]'>
                  <span className='text-[12px] font-semibold px-2 py-1'>
                   {category}: {item}
                  </span>
                  <IoMdClose className='text-lg cursor-pointer mr-2' onClick={() => handleRemoveFilter(category, item)} />
                </div>
              ))
            )}
            {Object.keys(selectedFilters).length > 0 && (
              <button onClick={clearFilters} className='text-red-400 text-[12px] ml-2 font-semibold'>
                Clear Filters
              </button>
            )}
          </div>

          {/* Conditionally render based on activeView */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : (
            <Suspense fallback={
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            }>
              
              <CompanyList viewType={activeView} companies={results} />
            </Suspense>
          )}
        </section>
      </div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 bg-[#22b8cf] text-white p-2 rounded-full shadow-md hover:bg-[#1098ad] transition"
        >
          <IoMdArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Home;
