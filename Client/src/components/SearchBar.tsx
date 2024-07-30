import React, { useState, useEffect, useRef } from 'react';
import { TextInput } from "flowbite-react";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { IoSearch } from "react-icons/io5";

interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
}

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<Company[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Company[]>([]);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (searchTerm) {
      fetchSuggestions(searchTerm);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchSuggestions = async (term: string) => {
    try {
      const response = await axios.get(`https://tyn-task1.onrender.com/api/companies?search=${term}`);
      setSuggestions(response.data.companies.slice(0, 5)); 
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const fetchResults = async () => {
    try {
      const response = await axios.get(`https://tyn-task1.onrender.com/api/companies?search=${searchTerm}`);
      setResults(response.data.companies);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const handleSearch = () => {
    fetchResults();
  };

  const handleSuggestionClick = (company: Company) => {
    setSearchTerm(company.name);
    setSuggestions([]);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSuggestions([]);
    setResults([]);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="relative w-full sm:w-[33rem]">
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm p-2">
          <TextInput
            placeholder="Search Companies by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-2 searchBorder"
          />
          {searchTerm && (
            <button onClick={handleClear} className="p-2 text-gray-500">
              <IoMdClose size={20} />
            </button>
          )}
          <button onClick={handleSearch} className="p-2 border text-[#495057] border-gray-300 rounded-full hover:bg-gray-100 ">
          <IoSearch size={20}/>
          </button>
        </div>
        {suggestions.length > 0 && (
          <ul 
            ref={suggestionsRef}
            className="absolute z-10 w-full bg-white border border-gray-300 shadow-lg mt-1 rounded-md"
          >
            {suggestions.map((company) => (
              <li 
                key={company.id} 
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSuggestionClick(company)}
              >
                {company.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default SearchBar;
