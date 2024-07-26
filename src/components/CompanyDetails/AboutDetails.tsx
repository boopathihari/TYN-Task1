import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const About = () => {
  return (
    <Card  className="px-2 bg-white rounded-lg shadow-lg cursor-auto select-text ">
      <h4 className="sm:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        About
      </h4>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        Web Design & Hosting solutions complete with Digital Marketing & Analytics. Electronics & IT Infrustructure, Solutions & Services Provider

Catering to the needs of Professionals  Enthusiests Students  Start Ups Small to Large Business Manufacturing  Health Care and more
      </p>
      
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
        Core Values
      </h5>
      <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
        <li>Innovation</li>
        <li>Customer Satisfaction</li>
        <li>Integrity</li>
        <li>Excellence</li>
        <li>Collaboration</li>
      </ul>


      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
        Key Services
      </h5>
      <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
        <li>Web Design & Hosting</li>
        <li>Digital Marketing & Analytics</li>
        <li>IT Infrastructure Solutions</li>
        <li>Electronics Solutions & Services</li>
      </ul>

    </Card>
  );
};

export default About;
