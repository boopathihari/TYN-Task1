import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const About = () => {
  return (
    <Card className="py-2 bg-white rounded-lg shadow-lg cursor-auto select-text ">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4">
        Technologies We Use
    </h5>


    <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    Digitalpage Company NZ Ltd serves a diverse range of industries, providing tailored solutions to meet the unique needs of each sector. Our expertise spans across:
    </p>

    <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
    At Digitalpage Company NZ Ltd, we leverage the latest technologies to deliver cutting-edge solutions. Our technology stack includes:
    </p>

    <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-400">
        <li><span className='font-semibold'>Web Development:</span> HTML5, CSS3, JavaScript, React, Angular, and Vue.js for responsive and dynamic web applications.</li>
        <li><span className='font-semibold'>Mobile Development:</span> Native and cross-platform mobile app development using Swift, Kotlin, React Native, and Flutter.</li>
        <li><span className='font-semibold'>Cloud Computing:</span> AWS, Azure, and Google Cloud for scalable and reliable cloud solutions.</li>
        <li><span className='font-semibold'>Data Analytics:</span> Big Data technologies such as Hadoop, Spark, and data visualization tools like Tableau and Power BI.</li>
        <li><span className='font-semibold'>Artificial Intelligence:</span> Machine learning, natural language processing, and computer vision using TensorFlow, PyTorch, and OpenCV.</li>
        <li><span className='font-semibold'>Blockchain:</span> Development of decentralized applications (DApps) and smart contracts on Ethereum, Hyperledger, and other blockchain platforms.</li>
        <li><span className='font-semibold'>Cybersecurity:</span> Comprehensive security solutions including threat detection, vulnerability assessment, and encryption technologies.</li>
    </ul>

    </Card>
  );
};

export default About;
