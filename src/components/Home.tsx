import React from 'react'
import Header from "./Header.tsx";
import SearchBar from './SearchBar.tsx';
import Accordion from './Accordion.tsx';
import line from '../../public/images/yellow.webp';
import ViewType from '../components/ViewType.tsx';
import CompanyList from '../components/CompanyList.tsx';

export default function Home() {
  return (
        <div className='bg-[#f8f9fa] w-full mb-10'>
        <Header/>

        <div className='w-[90%] mx-auto my-0 sm:flex gap-x-4 px-4 sm:mt-10 mb-10 mt-6'>

          {/* Filter Section */}
          <section className='w-full sm:w-[25%] text-[14px]'> 
             <Accordion />
          </section>

          <div className='w-[100%] sm:p-4 py-4 sm:hidden '>
            <SearchBar/>
          </div>

          {/* Companies List  */}
        <section className='CardList sm:w-[75%] w-[100%] sm:mt-0 mt-4'>
          
        <div className='sm:flex justify-between items-center flex-none '>
            <h1 className='sm:text-[2.4rem] text-3xl text-[#495057] font-medium '>Growth Tech Firms</h1>
            <div className='mt-2 sm:mt-0'>
            <ViewType />
            </div>
        </div>

          <CompanyList />

        </section>

         
        </div>

      </div>
  )
}
