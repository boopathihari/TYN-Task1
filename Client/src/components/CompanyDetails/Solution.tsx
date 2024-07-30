import { Card } from 'flowbite-react'; 
import { Company } from './types';

interface IndustryProps {
  company: Company,
}


const Solution: React.FC<IndustryProps> = ({ company }) => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
      Our Solutions
    </h5>

    <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
      <li className='mb-2'>
      {company.solutions.map((val, i) => (
          <li key={i} className='font-medium'>{val}</li> 
        ))}
      </li>
    </ul>

    </Card>
  );
};

export default Solution;
