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

export default function Filter() {
  const useScreenSize = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return isMobile;
  };

  const isMobile = useScreenSize();
  const [isOpen, setIsOpen] = useState(!isMobile); // Default to true on large screens, false on small screens

  useEffect(() => {
      setIsOpen(!isMobile); // Update isOpen state when screen size changes
  }, [isMobile]);

  const toggleSection = () => {
      setIsOpen(!isOpen);
  };

  const filterSections = [
    {
      title: 'Industry',
      items: ['Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Media & Entertainment','Energy','CyberSecurity' ],
      icon: LiaIndustrySolid
    },
    {
      title: 'Technology',
      items: ['Frameworks and Libraries', 'Cloud Platforms','Database Technologies', 'DevOps Tools', 'AI and Machine Learning'],
      icon:GrTechnology
    },
    {
      title: 'Country',
      items: ['North America', 'Europe', 'Asia', 'South America', 'Oceania', 'Africa'],
      icon:FaLocationDot
    },
    {
      title: 'Analyst Rating',
      items: ['High', 'Medium', 'Low'],
      icon: IoAnalytics
    },
    {
      title: 'Funding Status',
      items: ['Seed', 'Series A', 'Series B','Series C', 'IPO','Acquired', 'Private Equity','Bootstrapped'],
      icon:RiRefund2Line
    },
    {
      title: 'Company Size',
      items: ['Small (1-50 employees)', 'Medium (51-200 employees)', 'Large (201-500 employees)', 'Enterprise (500+ employees)'],
      icon: IoMdResize
    
    },
    {
      title: 'Founded Year',
      items: ['Before 2000','2000-2010', '2011-2020', 'After 2020'],
      icon: FaCalendarAlt
    
    },
    {
      title: 'Customer Type',
      items: ['B2B', 'B2C', 'B2G'],
      icon: GrBusinessService

    },
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
        />
      ))}
    </>
    }
    
    </div>
  )
}
