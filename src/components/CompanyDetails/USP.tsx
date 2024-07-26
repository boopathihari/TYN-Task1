import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const USP = () => {
  return (
    <Card className=" bg-white rounded-lg shadow-lg cursor-auto select-text  ">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
  Our Unique Selling Proposition
</h5>

    
<p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
  At Digitalpage Company NZ Ltd, we stand out in the market due to our commitment to excellence and our customer-centric approach. Our unique selling propositions include:
</p>

<ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
  <li>
    <strong>Innovative Solutions:</strong> 
    We leverage the latest technologies and industry trends to deliver cutting-edge solutions that drive business success.
  </li>
  <li>
    <strong>Customer-Centric Approach:</strong> 
    Our solutions are tailored to meet the specific needs of our clients, ensuring maximum satisfaction and long-term relationships.
  </li>
  <li>
    <strong>Expert Team:</strong> 
    Our team comprises highly skilled professionals with extensive experience in various industries, ensuring top-quality service delivery.
  </li>
  <li>
    <strong>Comprehensive Services:</strong> 
    From web design to IT infrastructure, we offer a wide range of services that cater to all aspects of digital business operations.
  </li>
  <li>
    <strong>Proven Track Record:</strong> 
    We have a history of successful projects and satisfied clients, demonstrating our ability to deliver on our promises.
  </li>
  <li>
    <strong>Scalability and Flexibility:</strong> 
    Our solutions are designed to grow with your business, providing the flexibility to adapt to changing needs and market conditions.
  </li>
</ul>


    </Card>
  );
};

export default USP;
