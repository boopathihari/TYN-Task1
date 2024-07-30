import { Card } from 'flowbite-react'; 
import { Company } from './types';

interface IndustryProps {
  company: Company,
}


const USP: React.FC<IndustryProps> = ({ company }) => {
  return (
    <Card className=" bg-white rounded-lg shadow-lg cursor-auto select-text  ">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
  Our Unique Selling Proposition
</h5>

    
<p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
  {company.name}, we stand out in the market due to our commitment to excellence and our customer-centric approach. Our unique selling propositions include:
</p>

<ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
      <li className='font-medium mb-2'>{company.usp}</li> 
</ul>


    </Card>
  );
};

export default USP;
