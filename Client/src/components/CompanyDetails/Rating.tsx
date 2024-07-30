import { Card } from 'flowbite-react'; 
import { Company } from './types';

interface IndustryProps {
  company: Company,
}


const Rating: React.FC<IndustryProps> = ({ company }) => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
   <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
    Our Ratings
  </h5>

<p className="font-normal text-gray-700 dark:text-gray-400 ">
  At Digitalpage Company NZ Ltd, we are proud of the recognition and positive feedback we receive from our clients and industry experts. Our ratings reflect our commitment to quality and excellence in service delivery. Here’s what others are saying about us:
</p>

<div className="mt-4">
  <div className="flex  flex-col justify-start w-fit">
    <span className="text-lg font-semibold text-gray-900 dark:text-white">Customer Satisfaction:</span>

    <span className=" text-gray-700 dark:text-gray-400"><span className='font-medium'>Rating:</span> {company.ratings.customerSatisfaction}</span>
  </div>

  <div className="mt-4">
    <span className="text-lg font-semibold text-gray-900 dark:text-white">Industry Recognition:</span>
    <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
    {company.ratings.industryRecognition.map((val, i) => (
          <li key={i} className='font-medium mb-2'>{val}</li> 
        ))}
    </ul>
  </div>
</div>


    </Card>
  );
};

export default Rating;
