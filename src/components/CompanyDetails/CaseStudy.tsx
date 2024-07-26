import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const CaseStudy = () => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
  Case Studies
</h5>

    
<p className="font-normal text-gray-700 dark:text-gray-400 ">
  At Digitalpage Company NZ Ltd, we take pride in our successful projects and the positive impact they have had on our clients. Here are some detailed case studies showcasing our expertise and results-driven approach:
</p>

<ul className="list-disc pl-5  text-gray-700 dark:text-gray-400">
  <li className="mt-2">
    <strong>Healthcare Platform Development</strong>
    <p className="font-normal ">
      We developed a comprehensive telemedicine platform for a leading healthcare provider. The platform enabled remote consultations, patient management, and secure communication between doctors and patients. As a result, the provider saw a 30% increase in patient satisfaction and a significant reduction in appointment wait times.
    </p>
  </li>
  <li className="mt-2">
    <strong>E-Learning Solution for a University</strong>
    <p className="font-normal ">
      Our team designed and implemented an e-learning platform for a major university. The platform included features such as virtual classrooms, resource sharing, and real-time assessments. This initiative led to a 40% increase in student engagement and improved overall academic performance.
    </p>
  </li>
  <li className="mt-2">
    <strong>Digital Banking Transformation</strong>
    <p className="font-normal ">
      For a financial institution, we developed a secure and user-friendly digital banking solution. The new platform enhanced customer experience, streamlined banking operations, and reduced transaction times by 25%. This project helped the institution attract new customers and retain existing ones.
    </p>
  </li>
  <li className="mt-2">
    <strong>E-Commerce Website for Retail Business</strong>
    <p className="font-normal ">
      We created an e-commerce website for a retail business, integrating advanced analytics and personalized marketing tools. The website not only improved user experience but also boosted sales by 20% and increased customer retention rates. The business now enjoys higher online visibility and revenue.
    </p>
  </li>
  <li className="mt-2">
    <strong>IoT-Enabled Supply Chain Management</strong>
    <p className="font-normal ">
      We implemented an IoT-enabled supply chain management system for a manufacturing company. The solution optimized inventory levels, reduced waste, and improved overall efficiency. This project led to a 15% reduction in operational costs and enhanced the company's competitive edge.
    </p>
  </li>
  <li className="mt-2">
    <strong>IT Infrastructure Upgrade</strong>
    <p className="font-normal ">
      For a mid-sized company, we executed a comprehensive IT infrastructure upgrade, including cloud migration and network optimization. The upgrade improved system reliability and reduced downtime by 50%, allowing the company to operate more efficiently and effectively.
    </p>
  </li>
  <li className="mt-2">
    <strong>Cybersecurity Implementation</strong>
    <p className="font-normal ">
      We implemented robust cybersecurity measures for a corporate client to protect sensitive data and ensure compliance with industry regulations. Our solution prevented potential data breaches and safeguarded the company's reputation, ensuring ongoing business continuity.
    </p>
  </li>
</ul>

    </Card>
  );
};

export default CaseStudy;
