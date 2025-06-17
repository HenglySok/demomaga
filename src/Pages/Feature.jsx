import { Banner } from '../components/Banner'
import FeatureCard from "../components/Feature/FeatureCard";
import { featurecard } from "../components/Feature/FeatureCard";

export default function Feature() {
  return (
    <>
      <Banner />
      <div className='max-w-screen-2xl mx-auto'>
        <div className="relative w-full bg-gray-900">
          <div className=" bg-black my-3 p-3">
            <h3 className="text-xl text-text-100">WEEKLY SHONEN JUM</h3>
          </div>
          <div className="flex  items-center scrollbar-x-hide overflow-x-auto scrollbar-hide h-fit gap-6 px-4">
            {featurecard.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[152px] h-[228px] rounded-xl overflow-hidden shadow-lg ">
                <FeatureCard image={item.image} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full bg-gray-900">
          <div className=" bg-black my-3 p-3">
            <h3 className="text-xl text-text-100">WEEKLY SHONEN JUM</h3>
          </div>
          <div className="flex  items-center scrollbar-x-hide overflow-x-auto scrollbar-hide h-fit gap-6 px-4">
            {featurecard.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[152px] h-[228px] rounded-xl overflow-hidden shadow-lg ">
                <FeatureCard image={item.image} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full bg-gray-900">
          <div className=" bg-black my-3 p-3">
            <h3 className="text-xl text-text-100">WEEKLY SHONEN JUM</h3>
          </div>
          <div className="flex  items-center scrollbar-x-hide overflow-x-auto scrollbar-hide h-fit gap-6 px-4">
            {featurecard.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[152px] h-[228px] rounded-xl overflow-hidden shadow-lg ">
                <FeatureCard image={item.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}