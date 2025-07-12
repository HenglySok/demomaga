import { useState } from 'react';
import { Banner } from '../components/Banner'
import FeatureCard from "../components/Feature/FeatureCard";
import { featurecard } from "../components/Feature/FeatureCard";

export default function Feature() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Banner />
      <div className='max-w-screen-2xl mx-auto'>
        <div className="relative w-full bg-gray-900">
          <div className=" bg-black my-3 p-3">
            <h3 className="text-xl text-text-100">WEEKLY SHONEN JUM</h3>
          </div>
          <div className="flex  items-center overflow-x-auto scrollbar-hide h-fit gap-6 px-4">
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
      </div> */}
      {/* <button
        className='bg-secondary-100 px-2 py-1 rounded-[5px]'
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
      <div className={`absolute ${isOpen ? "top-20 left-100" : "top-[-500px]"} bg-pink-500`}>
        <h1>Hello everyone</h1>
        <h1>Hello everyone</h1>
        <h1>Hello everyone</h1>
        <h1>Hello everyone</h1>
        <button
          className='bg-primary-100 px-2 py-1 rounded-[5px]'
          onClick={() => setIsOpen(false)}
        >
          close
        </button>
      </div> */}
    </>

  );
}