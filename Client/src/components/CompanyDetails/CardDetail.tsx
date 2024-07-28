import { Card } from 'flowbite-react'; // Adjust import based on your actual setup
import { Company } from './types';


interface CardDetailProps {
  company: Company,
}


const CardDetail: React.FC<CardDetailProps> = ({ company }) => {

  return (
    <Card  className="px-2 bg-white rounded-lg shadow-lg select-text cursor-auto">
      <h4 className="sm:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Company Details
      </h4>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Company Name:</strong> {company.name}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Website:</strong> <a href="https://digitalpage.nz" className="text-blue-600">{company.website}</a>
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Description:</strong> {company.description}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Founded Year:</strong> {company.foundedYear}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Industry:</strong> {company.industry}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Country:</strong> {company.country}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        <strong>Company Size:</strong>  {company.companySize}
      </p>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
        Contact Information
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        Email: {company.contactInfo.email}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Phone: {company.contactInfo.phone}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Address: {company.contactInfo.address}
      </p>

    </Card>
  );
};

export default CardDetail;
