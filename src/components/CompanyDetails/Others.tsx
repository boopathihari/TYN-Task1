import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const Partners = () => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
   <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
  Other Details
</h5>

<p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
  To provide a comprehensive view of Digitalpage Company NZ Ltd, we’ve highlighted additional information that showcases our achievements, qualifications, and company background. Here are some key details:
</p>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Awards & Recognitions</h6>
  <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
    <li>Best Digital Solutions Provider - 2023</li>
    <li>Innovative Technology Award - 2022</li>
    <li>Top IT Service Provider - 2021</li>
  </ul>
</div>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Certifications</h6>
  <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
    <li>ISO 9001:2015 - Quality Management System</li>
    <li>ISO/IEC 27001 - Information Security Management</li>
    <li>Certified Scrum Master (CSM)</li>
    <li>Microsoft Certified Partner</li>
  </ul>
</div>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Company History</h6>
  <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    Founded in 2010, Digitalpage Company NZ Ltd started as a small web design agency with a vision to revolutionize digital experiences. Over the years, we have grown into a leading provider of comprehensive digital solutions, expanding our services to include IT infrastructure, digital marketing, and custom software development. Our commitment to innovation and excellence has enabled us to build a strong reputation and serve clients across various industries.
  </p>
</div>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Meet Our Team</h6>
  <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    Our team is composed of dedicated professionals who bring expertise and passion to every project. From experienced developers to creative designers and strategic consultants, our team works collaboratively to deliver exceptional results. Learn more about our leadership team and their backgrounds:
  </p>
  <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
    <li><strong>Jane Doe:</strong> CEO - Over 15 years of experience in digital solutions and technology leadership.</li>
    <li><strong>John Smith:</strong> CTO - Expert in IT infrastructure and cybersecurity with a background in enterprise solutions.</li>
    <li><strong>Emily Johnson:</strong> Head of Marketing - Specialist in digital marketing strategies and brand development.</li>
    <li><strong>Michael Brown:</strong> Lead Developer - Skilled in web development and software engineering with a focus on innovation.</li>
  </ul>
</div>

<div className="mt-4">
  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Our Commitment to Sustainability</h6>
  <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    At Digitalpage Company NZ Ltd, we are committed to sustainability and reducing our environmental impact. We implement eco-friendly practices in our operations, such as reducing waste, optimizing energy usage, and supporting green initiatives. Our goal is to contribute positively to our community and the environment while delivering high-quality solutions to our clients.
  </p>
</div>




    </Card>
  );
};

export default Partners;
