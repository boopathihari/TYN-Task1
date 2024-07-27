import { Button, Tabs, TabsRef } from "flowbite-react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Header from "./Header";
import Background from '../../public/images/background.jpg';
import Logo from '../../public/images/companyLogo1.webp';
import CardDetail from './CompanyDetails/CardDetail.tsx';
import { FaRegBookmark } from "react-icons/fa";
import { PiPlugsConnectedBold } from "react-icons/pi"; 
import { GrOverview } from "react-icons/gr";
import { GrTechnology } from 'react-icons/gr';
import { AiOutlineSolution } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import About from '../components/CompanyDetails/AboutDetails.tsx';
import Industry from '../components/CompanyDetails/Industry.tsx';
import Technology from '../components/CompanyDetails/Technology.tsx';
import Solution from '../components/CompanyDetails/Solution.tsx';
import USP from '../components/CompanyDetails/USP.tsx';
import UseCase from '../components/CompanyDetails/UseCase.tsx';
import CaseStudy from '../components/CompanyDetails/CaseStudy.tsx';
import Rating from '../components/CompanyDetails/Rating.tsx';
import Partners from '../components/CompanyDetails/Partners.tsx';
import Others from '../components/CompanyDetails/Others.tsx';
import { IoMdArrowBack } from "react-icons/io";

export default function Component() {
  const { id } = useParams(); // Get ID from URL params
  const [company, setCompany] = useState<any>(null); // Replace 'any' with the proper type
  const [loading, setLoading] = useState(true);
  
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/companies/${id}`);
        console.log('Response:', response); // Log the response
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data); 
        console.log(data.technologiesUsed);
        setCompany(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching company details:', error);
        setLoading(false);
      }
      
    };

    fetchCompany();
  }, [id]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!company) {
    return <div>No company data found.</div>;
  }

  return (
    <div className="realtive flex flex-col gap-3">
        <Header/>

<div className="relative w-[100%] mx-auto my-0">
       

<div className="relative h-[100vh] w-[100%] ">
      <button
          onClick={() => navigate('/')}
          className="absolute top-0 z-50 left-2 sm:left-[6rem] text-[1rem] text-[#495057]  hover:underline bg-white rounded px-3 py-1 flex justify-center items-center gap-2 m-4">
          <IoMdArrowBack /> Back
        </button>

  <img
    src={Background}
    alt=""
    className="absolute inset-0 w-full h-[18%] object-cover hidden sm:block"
    />
  <div className="absolute sm:top-[5rem] sm:left-[6rem] top-[1rem] left-[9rem]">
        <div className="bg-white p-6 rounded-sm shadow-md ">
          <img src={company.logo} className="w-[5rem] h-[5rem] object-cover" alt="" />
        </div>
    </div>
    <div className="sm:absolute right-20 sm:top-10 flex gap-3 justify-center sm:pt-0 pt-[40%]">
        <Button className=" w-40 p-1 sm:h-10 h-10 ">
            <PiPlugsConnectedBold className="w-4 h-4 mr-2"/>
            Connect
        </Button>
        
        <Button color="light" className="w-40  h-10"><FaRegBookmark className="w-4 h-4 mr-2"/> Bookmark</Button>
    </div>
  <div className="flex w-[100%]  absolute sm:top-[9rem]  top-[16rem]">
      <Tabs aria-label="Company profile tabs" className="sm:w-[90%] sm:ml-[8%] pl-4 flex gap-4 mb-10 w-[100%]"  ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
        <Tabs.Item active title="Overview" icon={GrOverview} className="outline-none focus:outline-none " >
            <div className="sm:w-[90%] sm:flex justify-between  gap-4 w-full">
                {/* Company Details */}
                <div className="sm:w-[40%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                <CardDetail company={company} />
                </div>

                {/* About */}
                <div className="sm:w-[60%]  w-[96%] sm:text-[1rem] text-[14px]">
                  <About company={company}/>
                </div>
            </div>
        </Tabs.Item>

        <Tabs.Item title="Industry & Technology" icon={GrTechnology}>
        <div className="sm:w-[90%] sm:flex justify-between gap-4 w-full">
          {/* Industries  */}
          <div className="sm:w-[50%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                <Industry company={company}/>
            </div>
                    
                {/* Technology */}
                <div className="sm:w-[50%] w-[96%] sm:text-[1rem] text-[14px]">
                <Technology company={company}/>
                </div>
        </div>
        </Tabs.Item>

        <Tabs.Item title="Solutions" icon={AiOutlineSolution}>
        <div className="sm:w-[90%] flex justify-center gap-4 w-full">
          {/* Solution  */}
          <div className="sm:w-[80%] w-[90%] sm:text-[1rem] text-[14px]">
                <Solution company={company}/>
            </div>
        </div>
        </Tabs.Item>
        <Tabs.Item title="USP & Use Cases" icon={FaRegLightbulb}>
        <div className="sm:w-[90%]  sm:flex justify-between gap-4 w-full">
          {/* Usp  */}
              <div className="sm:w-[40%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                    <USP company={company}/>
                </div>

                {/* Use case */}
                <div className="sm:w-[60%]  w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                <UseCase company={company}/>
                </div>  
        </div>
        </Tabs.Item>
       
        <Tabs.Item title="Case Studies" icon={IoBookOutline}>
        <div className="sm:w-[90%] sm:flex justify-center gap-4 w-full">
           {/* Case Study */}
           <div className="sm:w-[80%]  w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                <CaseStudy company={company}/>
            </div>
        </div>
        </Tabs.Item>

        <Tabs.Item title="Ratings & Partners" icon={FaRegStar}>
        <div className="sm:w-[90%] sm:flex justify-center gap-4 w-full">
           {/* Others  */}
           <div className="sm:w-[40%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                <Rating company={company}/>
            </div>
                    
                
                {/* Partners */}
                <div className="sm:w-[60%] w-[96%] mb-4 sm:text-[1rem] text-[14px] ">
                <Partners company={company}/>
                </div>
        </div>
        </Tabs.Item>

        <Tabs.Item title="Others" icon={LiaIndustrySolid}>
        <div className="sm:w-[90%]  sm:flex justify-center gap-4 w-full">
           {/* Others  */}
           <div className="sm:w-[80%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                <Others company={company}/>
            </div>
        </div>
        </Tabs.Item>

      </Tabs>
  </div>
</div>


      {/* <Button.Group>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(0)}>
          Profile
        </Button>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
          Dashboard
        </Button>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
          Settings
        </Button>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
          Contacts
        </Button>
      </Button.Group> */}
</div>

    </div>
  );
}
