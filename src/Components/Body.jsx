import React from "react";
import loan from "../assests/loan.png";
import monitoring from "../assests/monitoring.png";
import setting from "../assests/setting.png";
import integrate from "../assests/integrated.png";
import notice from "../assests/notice.jpg";

function Body() {
  return (
    <div className="pt-10 flex flex-col items-center justify-center px-4 md:px-48">
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-5xl font-semibold mt-5">
          Key Features
        </h1>
        <p className="text-lg md:text-xl text-indigo-950 font-semibold">
          An end-to-end, customizable Loan Management Solution
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 pt-10">
        <div className="flex flex-col gap-10 md:w-1/2">
          <div className="flex flex-col md:flex-row w-full rounded-lg hover:shadow-xl">
            <div className="flex-shrink-0">
              <img
                src={integrate}
                className="w-40 h-14 mt-5"
                alt="Integrated Solution"
              />
            </div>
            <div className="flex-grow p-5">
              <h1 className="text-xl md:text-2xl text-indigo-950 font-bold">
                360° Integrated Lending Solution
              </h1>
              <p className="text-gray-500">
                One of the most comprehensive portfolios of lending solutions
                tailored to meet the needs of financial institutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full rounded-lg hover:shadow-xl">
            <div className="flex-shrink-0">
              <img
                src={monitoring}
                className="w-40 h-14 mt-5"
                alt="Monitoring"
              />
            </div>
            <div className="flex-grow p-5">
              <h1 className="text-xl md:text-2xl text-indigo-950 font-bold">
                Easy Monitoring
              </h1>
              <p className="text-gray-500">
                Monitor all borrowers through a parameterized approach with
                capabilities like early warning signs configurable to your
                financial institution’s policies.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full rounded-lg hover:shadow-xl">
            <div className="flex-shrink-0">
              <img
                src={setting}
                className="w-40 h-14 mt-5"
                alt="Settlement Capabilities"
              />
            </div>
            <div className="flex-grow p-5">
              <h1 className="text-xl md:text-2xl text-indigo-950 font-bold">
                Customizable Settlement Capabilities
              </h1>
              <p className="text-gray-500">
                Efficiently manage settlements with systems configurable for
                different frequencies of payments and tranche settlements.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full rounded-lg hover:shadow-xl md:mb-10">
            <div className="flex-shrink-0">
              <img
                src={notice}
                className="w-40 h-32 mt-5"
                alt="Credit Risk Management"
              />
            </div>
            <div className="flex-grow p-5">
              <h1 className="text-xl md:text-2xl text-indigo-950 font-bold">
                Better Credit Risk Management
              </h1>
              <p className="text-gray-500">
                Strengthen credit risk management with a powerful lending system
                designed to meet the enterprise loan origination needs of
                financial institutions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:ml-16">
          <img
            src={loan}
            className="w-80 h-80 md:w-96 md:h-96 rounded-xl mt-10 mb-10 "
            alt="Loan Management"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
