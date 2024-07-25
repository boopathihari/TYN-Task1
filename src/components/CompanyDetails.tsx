import { Button, Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Header from "./Header";
import Background from '../../public/images/background.jpg';
import Logo from '../../public/images/companyLogo1.webp';
import CardDetail from '../components/CardDetail.tsx';
import { FaRegBookmark } from "react-icons/fa";
import { PiPlugsConnectedBold } from "react-icons/pi"; 

export default function Component() {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-3">
        <Header/>

<div className="w-[100%] mx-auto my-0">

<div className="relative h-[100vh] w-[100%] ">
  <img
    src={Background}
    alt=""
    className="absolute inset-0 w-full h-[16%] object-cover"
  />
  <div className="absolute top-[3rem] left-[6rem]">
        <div className="bg-white p-6 rounded-sm shadow-md">
        <img src={Logo} className="w-[5rem] h-[5rem]" alt="" />
        </div>
    </div>
    <div className="absolute right-20 top-10 flex gap-3">
        <Button className=" w-40 p-1">
            <PiPlugsConnectedBold className="w-4 h-4 mr-2"/>
            Connect
        </Button>
        
        <Button color="light" className="w-40"><FaRegBookmark className="w-4 h-4 mr-2"/> Bookmark</Button>
    </div>
  <div className="flex w-[100%]  absolute top-[9rem] ">
      <Tabs aria-label="Company profile tabs" className="w-[90%] ml-[10%] flex gap-4 mb-10"  ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
        <Tabs.Item active title="Overview" icon={HiUserCircle} className="outline-none focus:outline-none" >
            <div className="w-[90%] flex justify-between gap-4">
                {/* Company Details */}
                <div className="w-[40%]">
                <CardDetail/>
                </div>
                    
                
                {/* About */}
                <div className="w-[60%]">
                <CardDetail/>
                </div>
            </div>
        </Tabs.Item>
        <Tabs.Item title="Industry & Technology" icon={MdDashboard}>
        <div className="w-[90%] flex justify-between gap-4">
          {/* Industries  */}
          <div className="w-[40%]">
                <CardDetail/>
            </div>
                    
                
                {/* Technology */}
                <div className="w-[60%]">
                <CardDetail/>
                </div>
        </div>
        </Tabs.Item>

        <Tabs.Item title="Solutions" icon={HiAdjustments}>
        <div className="w-[90%] flex justify-between gap-4">
          {/* Industries  */}
          <div className="w-[40%]">
                <CardDetail/>
            </div>
                    
                
                {/* Technology */}
                <div className="w-[60%]">
                <CardDetail/>
                </div>
        </div>
        </Tabs.Item>
        <Tabs.Item title="USP & Use Cases" icon={HiClipboardList}>
        <div className="w-[90%]  flex justify-between gap-4">
          {/* Industries  */}
          <div className="w-[40%]">
                <CardDetail/>
            </div>
                    
                
                {/* Technology */}
                <div className="w-[60%]">
                <CardDetail/>
                </div>
        </div>
        </Tabs.Item>
       
        <Tabs.Item title="Case Studies" icon={HiClipboardList}>
        <div className="w-[90%] flex justify-between gap-4">
           {/* Industries  */}
           <div className="w-[40%]">
                <CardDetail/>
            </div>
                    
                
                {/* Technology */}
                <div className="w-[60%]">
                <CardDetail/>
                </div>
        </div>
        </Tabs.Item>

        <Tabs.Item title="Ratings & Partners" icon={HiClipboardList}>
        <div className="w-[90%]  flex justify-between gap-4">
           {/* Industries  */}
           <div className="w-[40%]">
                <CardDetail/>
            </div>
                    
                
                {/* Technology */}
                <div className="w-[60%]">
                <CardDetail/>
                </div>
        </div>
        </Tabs.Item>

        <Tabs.Item title="Others" icon={HiClipboardList}>
        <div className="w-[90%]  flex justify-between gap-4">
           {/* Industries  */}
           <div className="w-[40%]">
                <CardDetail/>
            </div>
                    
                
                {/* Technology */}
                <div className="w-[60%]">
                <CardDetail/>
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
