import { Card } from 'flowbite-react'; // Adjust import based on your actual setup
import { Company } from './types';


interface AboutProps {
  company: Company,
}


const About: React.FC<AboutProps> = ({ company }) => {
  return (
    <Card  className="px-2 bg-white rounded-lg shadow-lg cursor-auto select-text ">
      <h4 className="sm:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        About
      </h4>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        {company.description}
      </p>
      
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
        Core Values
      </h5>
      <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
        {company.coreValues.map((val, i) => (
          <li key={i}>{val}</li> 
        ))}
      </ul>


      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
        Key Services
      </h5>
      <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
      {company.keyServices.map((val, i) => (
          <li key={i}>{val}</li> 
        ))}
      </ul>

    </Card>
  );
};

export default About;
