import React from 'react'

function Footer() {
  return (
    <div className="bg-blue-50 h-auto w-full pt-5 pl-20">
      <h3 className="font-semibold text-lg">Office Adress</h3>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div>
          <h3 className=" tracking-wider text-indigo-950 mb-3 font-semibold">
            Mumbai, Maharashtra
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            5th Floor, Satyam Tower, Off Govandi Station Rd.,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            Near Wasan Motors, Deonar,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">Mumbai – 400088</h3>
        </div>

        <div>
          <h3 className=" tracking-wider text-indigo-950 mb-3 font-semibold">
            Gurugram, Haryana
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            5th Floor, Satyam Tower, Off Govandi Station Rd.,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            Near Wasan Motors, Deonar,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            {" "}
            <h3 className="text-gray-500 text-base mb-1">Gurugram – 122002</h3>
          </h3>
        </div>

        <div>
          <h3 className=" tracking-wider text-indigo-950 mb-3 font-semibold">
            Bengaluru, Karnataka
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            BHIVE Workspace, No.467/468, 4th floor.
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            Shri Krishna Temple Rd, Indira Nagar Stage 1.
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            {" "}
            <h3 className="text-gray-500 text-base mb-1">Bengaluru – 560038</h3>
          </h3>
        </div>

        <div className="pt-5">
          <h3 className=" tracking-wider text-indigo-950 mb-3 font-semibold">
            Noida, Uttar Pradesh
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            Smartworks WTT, Sector-16, Block-B,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            Lower Ground Floor, Near Sector 16
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            {" "}
            <h3 className="text-gray-500 text-base mb-1">
              Metro Station, Noida – 201301
            </h3>
          </h3>
        </div>

        <div className="pt-5">
          <h3 className=" tracking-wider text-indigo-950 mb-3 font-semibold">
            Chandigarh
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            4th Floor, SCO 54-55-56,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">Sector – 17 A,</h3>
          <h3 className="text-gray-500 text-base mb-1">
            {" "}
            <h3 className="text-gray-500 text-base mb-1">
              Chandigarh – 160017
            </h3>
          </h3>
        </div>

        <div className="pt-5">
          <h3 className=" tracking-wider text-indigo-950 mb-3 font-semibold">
            Kolkata, West Bengal
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            Awfis, 5th floor, Cabin-9,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            50, Chowringee Road, Elgin,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            {" "}
            <h3 className="text-gray-500 text-base mb-1">Kolkata – 700071</h3>
          </h3>
        </div>

        <div className="pt-5">
          <h3 className=" tracking-wider text-indigo-950 mb-3 font-semibold">
            Pune, Maharashtra
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            URBANWRKS, 1608, 16th Floor,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            Nandan Probiz, Laxman Nagar, Baner,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            {" "}
            <h3 className="text-gray-500 text-base mb-1">Pune – 411045</h3>
          </h3>
        </div>

        <div className="pt-5">
          <h3 className=" tracking-wider text-indigo-950 mb-3 font-semibold">
            Singapore
          </h3>
          <h3 className="text-gray-500 text-base mb-1">18 Cross Street,</h3>
          <h3 className="text-gray-500 text-base mb-1">
            #10-01 Cross Street Exchange,
          </h3>
          <h3 className="text-gray-500 text-base mb-1">
            {" "}
            <h3 className="text-gray-500 text-base mb-1">Singapore – 048423</h3>
          </h3>
        </div>
      </div>
      <div className="border-b-2 mt-5"></div>
      <div className="md:pl-10 pr-10 pb-5 text-[13px]  text-center mt-5 text-gray-500">
        <p>
          {" "}
          CredAble is the tradename for Equentia SCF Technologies Private
          Limited and its wholly owned subsidiary, Equentia Financial Service
          Private Limited, a non-deposit taking Non-Banking Financial Company
          (NBFC) licensed by the Reserve Bank of India (RBI) bearing
          registration No. 13.02344. © 2024 CredAble
        </p>
      </div>
    </div>
  );
}

export default Footer
