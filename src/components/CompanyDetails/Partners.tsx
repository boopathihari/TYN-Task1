import { Card } from 'flowbite-react'; // Adjust import based on your actual setup
import { Company } from './types';

interface IndustryProps {
  company: Company,
}


const Partners: React.FC<IndustryProps> = ({ company }) => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
   <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
    Our Partners
  </h5>

<p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
  We believe in building strong partnerships to deliver the best solutions for our clients. Our network of partners includes leading companies and technology providers that enhance our capabilities and ensure the highest quality of service. Here are some of our valued partners:
</p>
<ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
    {company.partners.map((val, i) => (
          <li key={i} className='font-medium mb-2'>{val}</li> 
        ))}
    </ul>
    </Card>
  );
};

export default Partners;
