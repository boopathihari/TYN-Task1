import { Card } from 'flowbite-react'; // Adjust import based on your actual setup
import { Company } from './types';

interface IndustryProps {
  company: Company,
}

const Others: React.FC<IndustryProps> = ({ company }) => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
   <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
  Other Details
</h5>

<p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
  To provide a comprehensive view of {company.name}, we’ve highlighted additional information that showcases our achievements, qualifications, and company background. Here are some key details:
</p>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Awards & Recognitions</h6>
  <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
        {company.awards.map((val, i) => (
          <li key={i} >{val}</li> 
        ))}
  </ul>
</div>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Certifications</h6>
  <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
  {company.certifications.map((val, i) => (
          <li key={i} >{val}</li> 
        ))}
  </ul>
</div>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Company History</h6>
  <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    {company.companyHistory}
  </p>
</div>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Meet Our Team</h6>
  <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    Our team is composed of dedicated professionals who bring expertise and passion to every project. From experienced developers to creative designers and strategic consultants, our team works collaboratively to deliver exceptional results. Learn more about our leadership team and their backgrounds:
  </p>
  <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
    {company.team.map((val, i) => (
          <li key={i} className='font-medium'>{val.name} : {val.role} - {val.experience}</li> 
        ))}
  </ul>
</div>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Our Commitment to Sustainability</h6>
  <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    {company.sustainability}
  </p>
</div>
    </Card>
  );
};

export default Others;
