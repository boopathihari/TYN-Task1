import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const CompanyOverview = () => {
  return (
    <Card  className="px-2 bg-white rounded-lg shadow-lg select-text cursor-auto">
      <h4 className="sm:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Digitalpage Company NZ Ltd
      </h4>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Company Name:</strong> Digitalpage Company NZ Ltd
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Website:</strong> <a href="https://digitalpage.nz" className="text-blue-600">https://digitalpage.nz</a>
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Description:</strong> Digitalpage Company NZ Ltd is a leading provider of digital marketing solutions. We specialize in delivering cutting-edge marketing strategies and technologies to help businesses grow online.
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Founded Year:</strong> 2015
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Industry:</strong> Marketing & Advertising
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Country:</strong> New Zealand
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Company Size:</strong> Medium (51-200 employees)
      </p>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
        Contact Information
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        Email: contact@digitalpage.co.nz
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Phone: +64 123 456 789
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Address: 123 Digital St, Auckland, New Zealand
      </p>

    </Card>
  );
};

export default CompanyOverview;
