import {useState} from 'react'

function FinancialInformation() {
  let [financialData, setFinancialData] = useState({
    itrType: "",
    itrIncome: "",
    salary: "",
    bonuses: "",
    propertyType: "",
    propertyValue: "",
    rentalIncome: "",
    interestSource: "",
    interestIncome: "",
  });

  function handleChange(e){
    setFinancialData({...financialData,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("Submitted Financial Data:", financialData);
  }
  return (
    <div className=" w-full h-auto  flex items-center justify-center pt-20 mb-20  ">
      <form className="shadow-2xl   px-24 bg-sky-100" onSubmit={handleSubmit}>
        <h3 className="text-2xl font-semibold text-indigo-950 mb-10 mt-10 text-center">
          LOAN ASSISMENT FORM
        </h3>

        <div className="grid grid-cols-2 gap-[8rem] ">
          <div className="grid grid-col gap-2">
            <label className="text-indigo-900 font-semibold ">ITR Type :</label>
            <select
              name="itrType"
              value={financialData.itrType}
              onChange={handleChange}
              className="w-[15rem] border-2 border-gray-500 rounded-md mb-5 "
              required
            >
              <option value="" className="">
                Select ITR Type
              </option>
              <option value="ITR-1">ITR-1</option>
              <option value="ITR-2">ITR-2</option>
              <option value="ITR-3">ITR-3</option>
              <option value="ITR-4">ITR-4</option>
            </select>
          </div>
          <div className="grid grid-col gap-2">
            <label className="text-indigo-900 font-semibold ">
              ITR Declare Income:
            </label>
            <input
              type="number"
              name="itrIncome"
              placeholder="Enter income as per ITR"
              value={financialData.itrIncome}
              onChange={handleChange}
              required
              className="w-[15rem] border-2 border-gray-500 rounded-md mb-5"
            />
          </div>
        </div>

        {/* salary */}
        <div className="grid grid-cols-2 gap-[8rem]">
          <div className="grid grid-col gap-2">
            <label className="text-indigo-900 font-semibold ">
              Monthly or Annual Salary:
            </label>
            <input
              type="number"
              name="salary"
              value={financialData.salary}
              onChange={handleChange}
              required
              className="w-[15rem] border-2 border-gray-500 rounded-md mb-5"
            />
          </div>
          <div className="grid grid-col gap-2">
            <label className="text-indigo-900 font-semibold ">
              Bonuses and Incentives:
            </label>
            <input
              type="number"
              name="bonuses"
              value={financialData.bonuses}
              onChange={handleChange}
              required
              className="w-[15rem] border-2 border-gray-500 rounded-md mb-5"
            />
          </div>
        </div>
        {/* Property div */}
        <div className="grid grid-cols-3 gap-[8rem]">
          <div className="grid grid-col gap-2">
            <label className="text-indigo-900 font-semibold ">
              Type of Property:
            </label>
            <select
              className="w-[15rem] border-2 border-gray-500 rounded-md mb-5"
              name="propertyType"
              value={financialData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="">Select Property Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div className="grid grid-col gap-2">
            <label className="text-indigo-900 font-semibold ">
              Estimated Market Value:
            </label>
            <input
              type="number"
              required
              name="propertyValue"
              value={financialData.propertyValue}
              onChange={handleChange}
              className="w-[15rem] border-2 border-gray-500 rounded-md mb-5"
            />
          </div>

          <div className="grid grid-col gap-2">
            <label className="text-indigo-900 font-semibold ">
              Rental Income (if applicable):
            </label>
            <input
              type="number"
              name="rentalIncome"
              required
              value={financialData.rentalIncome}
              onChange={handleChange}
              className="w-[15rem] border-2 border-gray-500 rounded-md mb-5"
            />
          </div>
        </div>
        {/* interested income resource */}
        <div className="grid grid-cols-2 gap-[8rem]">
          <div className="grid grid-col gap-2">
            <label className="text-indigo-900 font-semibold ">
              Interest Income Source:
            </label>
            <select
              name="interestSource"
              required
              value={financialData.interestSource}
              onChange={handleChange}
              className="w-[15rem] border-2 border-gray-500 rounded-md mb-5"
            >
              <option value="">Select Interest Source</option>
              <option value="savingsAccount">Bank Savings Account</option>
              <option value="fixedDeposit">Fixed Deposit</option>
              <option value="bonds">Bonds</option>
              <option value="other">Other Financial Instruments</option>
            </select>
          </div>

          <div className="grid grid-col gap-2">
            <label className="text-indigo-900 font-semibold ">
              Interest Income Amount:
            </label>
            <input
              type="number"
              name="interestIncome"
              required
              placeholder="Enter interest income"
              value={financialData.interestIncome}
              onChange={handleChange}
              className="w-[15rem] border-2 border-gray-500 rounded-md mb-5"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mb-10 mt-9">
          <button
            type="submit"
            className="bg-indigo-700 w-[15rem] h-10 text-white rounded-md hover:bg-indigo-400"
          >
            Submit Financial Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default FinancialInformation
