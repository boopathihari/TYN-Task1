import { useState } from "react";
import { Button } from "flowbite-react";
import { IoGrid } from "react-icons/io5";
import { MdViewHeadline } from "react-icons/md";

export default function Component() {
  const [activeView, setActiveView] = useState("card");

  return (
    <Button.Group >
      <Button
        className={`${
          activeView === "card" 
            ? "bg-[#1098ad] text-[#f8f9fa] hover:bg-[#1098ad] " 
            : "bg-white text-[#495057] hover:text-[#22b8cf] hover:border-[#22b8cf] no-hover "
        } border-gray-200`}
        onClick={() => setActiveView("card")}
      >
        <IoGrid className="mr-3 h-4 w-4" />
        Card View
      </Button>
      <Button
        className={`${
          activeView === "list" 
            ? "bg-[#1098ad] text-[#f8f9fa] hover:bg-[#1098ad]" 
            : "bg-white text-[#495057] hover:text-[#22b8cf] hover:border-[#22b8cf] no-hover"
        }  border-gray-200`}
        onClick={() => setActiveView("list")}
      >
        <MdViewHeadline className="mr-3 h-5 w-5" />
        List View
      </Button>
    </Button.Group>
  );
}