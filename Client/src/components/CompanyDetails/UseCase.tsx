import { Card } from 'flowbite-react'; // Adjust import based on your actual setup
import { Company } from './types';

interface IndustryProps {
  company: Company,
}


const Usecase: React.FC<IndustryProps> = ({ company }) => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
  Use Cases
</h5>


<p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
  Our solutions have been successfully implemented across various industries, helping businesses achieve their goals and overcome challenges. Here are some notable use cases:
</p>

<ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
      {company.useCases.map((val, i) => (
          <li key={i} className='font-medium'>{val}</li> 
      ))}
</ul>
    </Card>
  );
};

export default Usecase;
