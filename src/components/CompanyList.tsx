import { Card, Button } from "flowbite-react";
import Logo from '../../public/images/companyLogo1.webp';
// import { IoMdBookmark } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



interface CompanyListProps {
  viewType: "card" | "list";
}



interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
}


// Function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

const CompanyList: React.FC<CompanyListProps> = ({viewType}) => {
  const [cardsData, setCardsData] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/companies'); // Adjust this URL to your API
        const data = await response.json();
        setCardsData(data.companies); // Assuming the data is in `data.companies`
        setLoading(false);
      } catch (error) {
        console.error('Error fetching company data:', error);
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div>
      {viewType === "card" ? (
        <div className="card-view">
          <div className="flex gap-4 mt-6 flex-wrap">

            {cardsData.map(card => (
                <Link to={`/profile/${card.id}`} key={card.id} className="sm:w-[32%] w-[100%] ">
              <Card className="h-[100%] relative hover:border hover:border-[#22b8cf] hover:border-1 cursor-pointer">
                <img
                  src={card.logo}
                  alt="Company Logo"
                  className="w-24 h-24 mx-auto object-cover" 
                />
                <span className="absolute flex justify-center items-center border border-[#495057] hover:border-[#0c8599] hover:text-[#0c8599] hover:bg-[#e3fafc] cursor-pointer top-3 left-3 w-10 h-10 rounded-full">
                  <FaRegBookmark className="w-5 h-5" />
                </span>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {truncateText(card.name, 60)}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-sm line-clamp-3">
                  {truncateText(card.description, 90)}
                </p>
                <Button className="bg-[#15aabf]">
                  Connect
                </Button>
              </Card>
            </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="list-view mt-10">
          {cardsData.map(card => (
            <Link to={`/profile/${card.id}`} key={card.id}>
              <div className="flex flex-row items-center gap-4 bg-white p-6 rounded-lg shadow-md mb-4 hover:border hover:border-[#22b8cf] cursor-pointer">
                <img
                  src={card.logo}
                  alt="Meaningful alt text for an image that is not purely decorative"
                  className="sm:w-24 sm:h-24 w-12 h-12 object-cover"
                />
                <div className="flex-1">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-lg">
                    {truncateText(card.name, 30)}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-sm sm:block hidden">
                    {truncateText(card.description, 90)}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:flex-row flex-col-reverse">
                  <span className="flex justify-center items-center border border-[#495057] hover:border-[#0c8599] hover:text-[#0c8599] hover:bg-[#e3fafc] cursor-pointer w-10 h-10 rounded-full">
                    <FaRegBookmark className="w-5 h-5" />
                  </span>
                  <Button className="bg-[#15aabf]">Connect</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};



export default CompanyList;
