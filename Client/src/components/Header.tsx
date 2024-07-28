
import React from 'react'

import { Navbar } from "flowbite-react";
import Logo from '../../public/images/tyn-logo.png';
import SearchBar  from './SearchBar';
import { LiaIndustrySolid } from "react-icons/lia";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";

interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
}

interface SearchBarProps {
  results: Company[];
  setResults: React.Dispatch<React.SetStateAction<Company[]>>;
}

const Header: React.FC<SearchBarProps> = ({ results, setResults }) => {
  return (
    
    <div className='p-2 bg-white sticky top-0 z-50 w-[100%]'>


      <Navbar className='w-[90%] mx-auto my-0'>
            <Navbar.Brand href="/">
              <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </Navbar.Brand>
          
            <div className="flex flex-row-reverse gap-[4px] sm:flex-row sm:gap-0">
              <Navbar.Toggle />
              <div className='hidden sm:block'>
                <SearchBar results={results} setResults={setResults} />
              </div>
            </div>
            
            <Navbar.Collapse>
              <Navbar.Link as={Link}  to="/"  className='text-[15px] cursor-pointer'>
                <span className='rounded-md hover:border-[#22b8cf] flex items-center '>
                  <LiaIndustrySolid className='text-[22px] mr-[4px]'/>
                  Companies
                </span>
              </Navbar.Link>
              <Navbar.Link  as={Link}  to="/bookmarks" className='text-[15px] cursor-pointer'>
                <span className='rounded-md hover:border-[#22b8cf] flex items-center '>
                  <CiBookmark className='text-[20px] mr-[4px]'/>
                  Bookmarks
                </span>
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
    </div>

  )
}




export default Header;