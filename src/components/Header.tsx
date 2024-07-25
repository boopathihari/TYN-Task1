
import React from 'react'

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from '../../public/images/tyn-logo.png';
import SearchBar  from './SearchBar';

export default function Header() {
  return (
    
    <div className='p-2 bg-white'>

    <Navbar fluid rounded className='w-[90%] mx-auto my-0'>
      <Navbar.Brand href="#">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
     
      <div className="flex flex-row-reverse gap-[4px] sm:flex-row sm:gap-0">
        <Navbar.Toggle />
        <div className='hidden sm:block'>
        <SearchBar/>
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



