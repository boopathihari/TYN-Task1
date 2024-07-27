
import React from 'react'

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from '../../public/images/tyn-logo.png';
import SearchBar  from './SearchBar';

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
    
    <div className='p-2 bg-white'>

    <Navbar fluid rounded className='w-[90%] mx-auto my-0'>
      <Navbar.Brand href="#">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
     
      <div className="flex flex-row-reverse gap-[4px] sm:flex-row sm:gap-0">
        <Navbar.Toggle />
        <div className='hidden sm:block'>
        <SearchBar results={results} setResults={setResults}/>
        </div>
      </div>
      
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>

    </Navbar>

  </div>
  )
}




export default Header;