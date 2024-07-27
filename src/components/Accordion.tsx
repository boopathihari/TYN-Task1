import React, { useEffect } from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import AccordionSection from './AccordionSection';

import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";

import { LiaIndustrySolid } from 'react-icons/lia';
import { GrTechnology } from 'react-icons/gr';
import { CiLocationOn } from 'react-icons/ci';
import { RiRefund2Line } from 'react-icons/ri';
import { IoAnalytics } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdResize } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { GrBusinessService } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";


// Define the type for filter data
interface FilterData {
  industries: string[];
  technologies: string[];
  countries: string[];
  fundingStatuses: string[];
  companySizes: string[];
  productTypes: string[];
  customerTypes: string[];
}


interface AccordionProps {
  onFilterChange: (category: string, item: string, isSelected: boolean) => void;
  checkedState: { [key: string]: { [item: string]: boolean } };
}


const Filter: React.FC<AccordionProps> = ({onFilterChange, checkedState}) => {
  
  const [filterData, setFilterData] = useState<FilterData | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(!isMobile);

  
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/filters');
        const data = await response.json();
        setFilterData(data);
      } catch (error) {
        console.error('Error fetching filter data:', error);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    setIsOpen(!isMobile); // Update isOpen state when screen size changes
  }, [isMobile]);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  if (!filterData) {
    return <div>Loading...</div>; 
  }

  const filterSections = [
    { title: 'Industry', items: filterData.industries, icon: LiaIndustrySolid },
    { title: 'Technology', items: filterData.technologies, icon: GrTechnology },
    { title: 'Country', items: filterData.countries, icon: FaLocationDot },
    { title: 'Funding Status', items: filterData.fundingStatuses, icon: RiRefund2Line },
    { title: 'Company Size', items: filterData.companySizes, icon: IoMdResize },
    { title: 'Analyst Rating', items: ['High', 'Medium', 'Low'], icon: IoAnalytics },
    { title: 'Product Types', items: filterData.productTypes, icon: IoMdResize },
    { title: 'Customer Type', items: filterData.customerTypes, icon: GrBusinessService },
    { title: 'Founded Year', items: ['Before 2000', '2000-2010', '2011-2020', 'After 2020'], icon: FaCalendarAlt }
  ];

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg ">
      <div className="flex justify-between items-center p-4 border-b border-gray-200" onClick={toggleSection}>
        <h2 className="text-lg font-semibold">Filters</h2>
        <div className="flex items-center space-x-4">
          
         {isOpen && isMobile ?  <IoMdCloseCircleOutline className="w-5 h-5 text-gray-600 sm:hidden block" />: <IoFilterSharp className="w-5 h-5 text-gray-600 sm:hidden block" />}
         <IoFilterSharp className="w-5 h-5 text-gray-600 hidden sm:block"/>
        </div>
      </div>
      {isOpen && 
      <>
        <div className=" p-4 border-b border-gray-200">
        <div className="relative ">
          <CiSearch  className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2"/>
          <input
            type="text"
            placeholder="Search filter"
            className="w-full pl-10 pr-4 py-2 border text-sm border-gray-200 rounded-md  focus:ring focus:outline-none"
          />
        </div>
      </div>
    
      
      {filterSections.map((section, index) => (
        <AccordionSection
          key={index}
          title={section.title}
          items={section.items}
          icon={section.icon}
          sectionIndex={index}
          onFilterChange={onFilterChange}
          checkedState={checkedState[section.title] || {}}
        />
      ))}
    </>
    }
    
    
    </div>
  )
}


export default Filter;