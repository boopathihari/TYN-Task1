import { Card, Button } from "flowbite-react";
import Logo from '../../public/images/companyLogo1.webp';
// import { IoMdBookmark } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imgSrc: Logo
  },
  {
    id: 2,
    title: "Noteworthy technology acquisitions 2022",
    description: "Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.",
    imgSrc: Logo
  },
  {
    id: 3,
    title: "Noteworthy technology acquisitions 2023",
    description: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    imgSrc: Logo
  },
  {
    id: 4,
    title: "Noteworthy technology acquisitions 2023",
    description: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    imgSrc: Logo
  },
  {
    id: 5,
    title: "Noteworthy technology acquisitions 2023",
    description: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    imgSrc: Logo
  },{
    id: 6,
    title: "Noteworthy technology acquisitions 2023",
    description: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    imgSrc: Logo
  }
  ,{
    id: 7,
    title: "Noteworthy technology acquisitions 2023",
    description: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    imgSrc: Logo
  }
  ,{
    id: 8,
    title: "Noteworthy technology acquisitions 2023",
    description: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    imgSrc: Logo
  }
];

export default function Component() {
  return (
        <Link to='/profile'>
    <div className="flex gap-4 mt-6 flex-wrap ">
      {cardsData.map(card => (
          <Card key={card.id} className="sm:w-[32%] w-[100%] relative hover:border hover:border-[#22b8cf] hover:border-1 cursor-pointer">
          <img
            src={card.imgSrc}
            alt="Meaningful alt text for an image that is not purely decorative"
            className="w-24 h-24 mx-auto" // Centering the image
          />
            <span className=" absolute flex justify-center items-center border border-[#495057] hover:border-[#0c8599]  hover:text-[#0c8599] hover:bg-[#e3fafc] cursor-pointer  top-3 left-3  w-10 h-10 rounded-full"><FaRegBookmark className="w-5 h-5  "/></span>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
            {card.description}
          </p>
            <Button className="bg-[#15aabf]"  >
                Connect
            </Button>
        </Card>
      ))}
    </div>
      </Link>
  );
}
