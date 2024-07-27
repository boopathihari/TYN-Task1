import { Card } from 'flowbite-react'; // Adjust import based on your actual setup
import { Company } from './types';

interface IndustryProps {
  company: Company,
}


const CaseStudy: React.FC<IndustryProps> = ({ company }) => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
  Case Studies
</h5>


<p className="font-normal text-gray-700 dark:text-gray-400 ">
  {company.name}, we take pride in our successful projects and the positive impact they have had on our clients. Here are some detailed case studies showcasing our expertise and results-driven approach:
</p>

<ul className="list-disc pl-5  text-gray-700 dark:text-gray-400">
<li className='mb-2'>
      {company.caseStudies.map((val, i) => (
          <li key={i} className='font-medium'>{val}</li> 
        ))}
  </li>
</ul>

    </Card>
  );
};

export default CaseStudy;
