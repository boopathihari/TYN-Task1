import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const Usecase = () => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
  Use Cases
</h5>


<p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
  Our solutions have been successfully implemented across various industries, helping businesses achieve their goals and overcome challenges. Here are some notable use cases:
</p>

<ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
  <li className='mb-2'>
    <strong>Healthcare:</strong> 
    A telemedicine platform developed for a healthcare provider that enabled remote consultations and improved patient management, resulting in a 30% increase in patient satisfaction.
  </li>
  <li className='mb-2'>
    <strong>Education:</strong> 
    An e-learning platform created for a university that facilitated online classes and resource sharing, leading to a 40% increase in student engagement and improved learning outcomes.
  </li>
  <li className='mb-2'>
    <strong>Finance:</strong> 
    A secure digital banking solution for a financial institution that enhanced customer experience and operational efficiency, reducing transaction times by 25%.
  </li>
  <li className='mb-2'>
    <strong>Retail:</strong> 
    An e-commerce website for a retail business that integrated advanced analytics and personalized marketing, resulting in a 20% boost in sales and customer retention.
  </li>
  <li className='mb-2'>
    <strong>Manufacturing:</strong> 
    An IoT-enabled supply chain management system for a manufacturing company that optimized inventory levels and reduced waste, leading to a 15% reduction in operational costs.
  </li>
  <li className='mb-2'>
    <strong>IT Infrastructure:</strong> 
    A comprehensive IT infrastructure upgrade for a mid-sized company, including cloud migration and network optimization, which improved system reliability and reduced downtime by 50%.
  </li>
  <li className='mb-2'>
    <strong>Cybersecurity:</strong> 
    Implementation of robust cybersecurity measures for a corporate client, protecting sensitive data and ensuring compliance with industry regulations, which prevented potential data breaches.
  </li>
</ul>



    </Card>
  );
};

export default Usecase;
