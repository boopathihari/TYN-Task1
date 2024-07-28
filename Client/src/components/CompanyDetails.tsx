import { Button, Tabs, TabsRef, Spinner } from "flowbite-react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import Header2 from "./Header2";
import Background from '../../public/images/background.jpg';
import CardDetail from './CompanyDetails/CardDetail';
import { FaRegBookmark } from "react-icons/fa";
import { PiPlugsConnectedBold } from "react-icons/pi"; 
import { GrOverview, GrTechnology } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import About from '../components/CompanyDetails/AboutDetails';
import Industry from '../components/CompanyDetails/Industry';
import Technology from '../components/CompanyDetails/Technology';
import USP from '../components/CompanyDetails/USP';
import UseCase from '../components/CompanyDetails/UseCase';
import CaseStudy from '../components/CompanyDetails/CaseStudy';
import Rating from '../components/CompanyDetails/Rating';
import Partners from '../components/CompanyDetails/Partners';
import Others from '../components/CompanyDetails/Others';
import { IoMdArrowBack } from "react-icons/io";

export default function Component() {
  const { id } = useParams(); // Get ID from URL params
  const [company, setCompany] = useState<any>(null); // Replace 'any' with the proper type
  const [loading, setLoading] = useState(true);
  
  const tabsRef = useRef<TabsRef>(null);
  const [, setActiveTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await fetch(`https://tyn-task1.onrender.com/api/companies/${id}`);
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
  
  return (
    <div className="relative flex flex-col gap-3">
      <Header2 />

      {loading ? (
        <div className="text-center">
          <Spinner aria-label="Extra large spinner example" size="xl" className='h-[50vh]' />
        </div>
      ) : (
        company && ( // Check if company is not null
        <div className="relative w-[100%] mx-auto my-0">
          <div className="relative h-[100vh] w-[100%] ">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 z-10 p-2 bg-white rounded shadow-md absolute top-0 left-11 sm:top-2 sm:left-20 "
            >
              <IoMdArrowBack className="mr-2" /> Back
            </button>

            <img
              src={Background}
              alt=""
              className="absolute inset-0 w-full h-[18%] object-cover hidden sm:block"
            />
            <div className="absolute sm:top-[4rem] sm:left-[6rem] top-[1rem] left-[9rem] ">
              <div className="bg-white p-6 rounded-sm shadow-md ">
                <img src={company.logo} className="w-[5rem] h-[5rem] object-cover" alt="" />
              </div>
            </div>
            <div className="sm:absolute right-20 sm:top-10 flex gap-3 justify-center sm:pt-0 pt-[40%]">
              <Button className=" w-40 p-1 sm:h-10 h-10 ">
                <PiPlugsConnectedBold className="w-4 h-4 mr-2" />
                Connect
              </Button>

              <Button color="light" className="w-40  h-10">
                <FaRegBookmark className="w-4 h-4 mr-2" /> Bookmark
              </Button>
            </div>
            
            <div className="flex w-[100%]  absolute sm:top-[9rem]  top-[16rem]">
              <Tabs aria-label="Company profile tabs" className="sm:w-[90%] sm:ml-[8%] pl-4 flex gap-4 mb-10 w-[100%]" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
                <Tabs.Item active title="Overview" icon={GrOverview} className="outline-none focus:outline-none " >
                  <div className="sm:w-[90%] sm:flex justify-between  gap-4 w-full">
                    {/* Company Details */}
                    <div className="sm:w-[40%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                      <CardDetail company={company} />
                    </div>

                    {/* About */}
                    <div className="sm:w-[60%]  w-[96%] sm:text-[1rem] text-[14px]">
                      <About company={company} />
                    </div>
                  </div>
                </Tabs.Item>

                <Tabs.Item title="Industry & Technology" icon={GrTechnology}>
                  <div className="sm:w-[90%] sm:flex justify-between gap-4 w-full">
                    {/* Industries */}
                    <div className="sm:w-[50%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                      <Industry company={company} />
                    </div>

                    {/* Technology */}
                    <div className="sm:w-[50%] w-[96%] sm:text-[1rem] text-[14px]">
                      <Technology company={company} />
                    </div>
                  </div>
                </Tabs.Item>

               
                <Tabs.Item title="USP & Use Cases" icon={FaRegLightbulb}>
                  <div className="sm:w-[90%]  sm:flex justify-between gap-4 w-full">
                    {/* Usp */}
                    <div className="sm:w-[40%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                      <USP company={company} />
                    </div>

                    {/* Use case */}
                    <div className="sm:w-[60%]  w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                      <UseCase company={company} />
                    </div>
                  </div>
                </Tabs.Item>

                <Tabs.Item title="Case Studies" icon={IoBookOutline}>
                  <div className="sm:w-[90%] sm:flex justify-center gap-4 w-full">
                    {/* Case Study */}
                    <div className="sm:w-[80%]  w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                      <CaseStudy company={company} />
                    </div>
                  </div>
                </Tabs.Item>

                <Tabs.Item title="Ratings & Partners" icon={FaRegStar}>
                  <div className="sm:w-[90%] sm:flex justify-center gap-4 w-full">
                    {/* Others */}
                    <div className="sm:w-[40%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                      <Rating company={company} />
                    </div>

                    {/* Partners */}
                    <div className="sm:w-[60%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                      <Partners company={company} />
                    </div>
                  </div>
                </Tabs.Item>

                <Tabs.Item title="Others" icon={LiaIndustrySolid}>
                  <div className="sm:w-[90%]  sm:flex justify-center gap-4 w-full">
                    {/* Others */}
                    <div className="sm:w-[80%] w-[96%] mb-4 sm:text-[1rem] text-[14px]">
                      <Others company={company} />
                    </div>
                  </div>
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </div>
        )
      )}
    </div>
  );
}
