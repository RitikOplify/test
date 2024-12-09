import React from "react";
import Image from "next/image";

const IndustrialSolutionsOverview = () => {
  return (
    <div>
      <div>
        
        <div className="max-w-[1440px]  mx-auto px-5 sm:px-10 pt-[120px]">
        <h1 className="text-center mb-[60px] text-4xl font-bold text-[#AA1F2E]">
          Safe Invotec: Enabling Precision Across Industries
        </h1>
          <div className="h-3/5 flex-col md:flex-row flex gap-20 md:gap-0  pb-[100px] items-center">
          <div className="h-full md:w-1/2 w-full flex items-center">
            <Image
              src="/Map/Safe Invotec.jpg"
              alt="Map"
              height={100}
              width={600}
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 text-[#54565A] text-base w-full md:pt-0 flex items-center flex-col justify-center px-5 md:px-6 lg:px-14">
            <p>
              Safe Invotec is your leading source for advanced joining and
              cutting solutions, including brazing, welding, and soldering
              materials. Our expertise ensures precision and reliability across
              a wide range of applications.
            </p>
            <p className=" mt-5">
              We also specialize in gas handling solutions, providing
              comprehensive support in industries like HVAC&R, aerospace,
              automotive, electronics, medical, and oil and gas, we are
              dedicated to excellence and innovation.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialSolutionsOverview;
