import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const About = () => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
        Industries We Serve
    </h5>

    <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    Digitalpage Company NZ Ltd serves a diverse range of industries, providing tailored solutions to meet the unique needs of each sector. Our expertise spans across:
    </p>

    <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
    <li><span className='font-semibold'>Healthcare:</span> Innovative solutions for patient management, telemedicine, and healthcare analytics.</li>
    <li><span className='font-semibold'>Education:</span> Comprehensive e-learning platforms, digital classrooms, and student management systems.</li>
    <li><span className='font-semibold'>Finance:</span> Secure and efficient financial services solutions, including digital banking and blockchain technologies.</li>
    <li><span className='font-semibold'>Retail:</span> E-commerce platforms, inventory management, and customer engagement solutions.</li>
    <li><span className='font-semibold'>Manufacturing:</span> Automation, supply chain management, and IoT solutions for enhanced productivity.</li>
    <li><span className='font-semibold'>Technology:</span> Advanced IT infrastructure, cloud computing, and cybersecurity solutions.</li>
    </ul>
    </Card>
  );
};

export default About;
