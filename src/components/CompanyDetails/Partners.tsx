import { Card } from 'flowbite-react'; // Adjust import based on your actual setup

const Partners = () => {
  return (
    <Card  className=" bg-white rounded-lg shadow-lg cursor-auto select-text ">
   <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
  Our Partners
</h5>

<p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
  We believe in building strong partnerships to deliver the best solutions for our clients. Our network of partners includes leading companies and technology providers that enhance our capabilities and ensure the highest quality of service. Here are some of our valued partners:
</p>

<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  <div className="flex items-center justify-center">
    <img src="/images/partner1-logo.png" alt="Partner 1" className="w-32 h-16 object-contain" />
  </div>
  <div className="flex items-center justify-center">
    <img src="/images/partner2-logo.png" alt="Partner 2" className="w-32 h-16 object-contain" />
  </div>
  <div className="flex items-center justify-center">
    <img src="/images/partner3-logo.png" alt="Partner 3" className="w-32 h-16 object-contain" />
  </div>
  <div className="flex items-center justify-center">
    <img src="/images/partner4-logo.png" alt="Partner 4" className="w-32 h-16 object-contain" />
  </div>
  <div className="flex items-center justify-center">
    <img src="/images/partner5-logo.png" alt="Partner 5" className="w-32 h-16 object-contain" />
  </div>
  <div className="flex items-center justify-center">
    <img src="/images/partner6-logo.png" alt="Partner 6" className="w-32 h-16 object-contain" />
  </div>
</div>



    </Card>
  );
};

export default Partners;
