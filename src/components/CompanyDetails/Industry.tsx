import { Card } from 'flowbite-react'; // Adjust import based on your actual setup
import { Company } from './types';

interface IndustryProps {
  company: Company,
}


const Industry: React.FC<IndustryProps> = ({ company }) => {
  return (
    <Card className="py-2 bg-white rounded-lg shadow-lg cursor-auto select-text ">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
        Technologies We Use
    </h5>

    <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    {company.name} serves a diverse range of industries, providing tailored solutions to meet the unique needs of each sector. Our expertise spans across:
    </p>

    <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    {company.name}, we leverage the latest technologies to deliver cutting-edge solutions. Our technology stack includes:
    </p>

    <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
        {company.technologiesUsed.map((val, i) => (
          <li key={i} className='font-medium'>{val}</li> 
        ))}
    </ul>

    

    </Card>
  );
};

export default Industry;
