import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const Rating = () => {
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
    <div className=" flex items-center mb-2">
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21 16.54 14.67 22 10.88 15.81 10.26 12 4 8.19 10.26 2 10.88 7.46 14.67 5.82 21 12 17.27z"/>
      </svg>
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21 16.54 14.67 22 10.88 15.81 10.26 12 4 8.19 10.26 2 10.88 7.46 14.67 5.82 21 12 17.27z"/>
      </svg>
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21 16.54 14.67 22 10.88 15.81 10.26 12 4 8.19 10.26 2 10.88 7.46 14.67 5.82 21 12 17.27z"/>
      </svg>
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21 16.54 14.67 22 10.88 15.81 10.26 12 4 8.19 10.26 2 10.88 7.46 14.67 5.82 21 12 17.27z"/>
      </svg>
      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21 16.54 14.67 22 10.88 15.81 10.26 12 4 8.19 10.26 2 10.88 7.46 14.67 5.82 21 12 17.27z"/>
      </svg>
    </div>
    <span className=" text-gray-700 dark:text-gray-400">(4.5/5 based on 120 reviews)</span>
  </div>

  <div className="mt-4">
    <span className="text-lg font-semibold text-gray-900 dark:text-white">Industry Recognition:</span>
    <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
      <li className='mb-2'>Top 10 Web Design Companies - 2023</li>
      <li className='mb-2'>Best IT Infrastructure Provider - 2022</li>
      <li>Excellence in Digital Marketing - 2021</li>
    </ul>
  </div>
</div>


    </Card>
  );
};

export default Rating;
