import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const Solution = () => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
      Our Solutions
    </h5>
    

<ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
  <li className='mb-2'>
    <span className='font-semibold'>Web Design & Development:</span> 
    Custom websites that are visually appealing, user-friendly, and optimized for performance. Our web design solutions are tailored to reflect your brand identity and engage your target audience.
  </li>
  <li className='mb-2'>
    <span className='font-semibold'>Digital Marketing & Analytics:</span> 
    Comprehensive digital marketing strategies including SEO, SEM, social media marketing, content marketing, and advanced analytics to track and improve your online presence and ROI.
  </li>
  <li className='mb-2'>
    <span className='font-semibold'>IT Infrastructure Solutions:</span> 
    Robust IT infrastructure services including network design, server management, and cloud solutions to ensure your business operations are seamless and secure.
  </li>
  <li className='mb-2'>
    <span className='font-semibold'>Electronics & Hardware Solutions:</span> 
    High-quality electronics and hardware solutions tailored to meet the demands of modern businesses, including hardware procurement, installation, and maintenance.
  </li>
  <li className='mb-2'> 
    <span className='font-semibold'>Cloud Solutions:</span> 
    Scalable cloud computing solutions that provide flexibility, security, and cost-efficiency, enabling businesses to operate more effectively and respond quickly to market changes.
  </li>
  <li className='mb-2'>
    <span className='font-semibold'>Mobile App Development:</span> 
    Custom mobile applications designed to provide an exceptional user experience, enhance customer engagement, and drive business growth.
  </li>
  <li className='mb-2'>
    <span className='font-semibold'>Business Intelligence & Analytics:</span> 
    Data-driven solutions that help businesses make informed decisions, optimize operations, and uncover new opportunities through advanced analytics and reporting.
  </li>
  <li className='mb-2'>
    <span className='font-semibold'>Cybersecurity Solutions:</span> 
    Comprehensive cybersecurity services to protect your business from cyber threats, ensuring data integrity and compliance with industry standards.
  </li>
</ul>

    </Card>
  );
};

export default Solution;
