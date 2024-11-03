import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowCIBILScore from "./ShowCIBILScore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function FinancialInformation() {
  let navigate=useNavigate();
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
  let [cibilScore, setCibilScore] = useState(null);
   function calculateCibilScore() {
     let score = 300; 

     // Add to score based on income and assets
     if (parseFloat(financialData.salary) > 50000) score += 200; 
     if (parseFloat(financialData.bonuses) > 20000) score += 100; 
     if (parseFloat(financialData.propertyValue) > 1000000) score += 150; 
     if (parseFloat(financialData.rentalIncome) > 30000) score += 50; 
     if (parseFloat(financialData.interestIncome) > 10000) score += 50; 

     //  score  valid range
     score = Math.min(Math.max(300, score), 900);
     return score;
   }

  function handleChange(e) {
    setFinancialData({ ...financialData, [e.target.name]: e.target.value });
  }

   async function saveToFirestore() {
    try {
      const docRef = await addDoc(collection(db, "financialData"), financialData); // Save to collection
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // let isComplete =
    //   financialData.itrType &&
    //   financialData.itrIncome &&
    //   financialData.salary &&
    //   financialData.bonuses &&
    //   financialData.propertyType &&
    //   financialData.propertyValue &&
    //   financialData.rentalIncome &&
    //   financialData.interestSource &&
    //   financialData.interestIncome;

        let isComplete = Object.values(financialData).every((value) => value !== "");


    if (isComplete) {
      const calculatedScore = calculateCibilScore();
      setCibilScore(calculatedScore);
      console.log("Submitted Financial Data:", financialData);
      console.log("Calculated CIBIL Score:", calculatedScore);

     saveToFirestore();
      navigate("/show-cibil-score", { state: { cibilScore: calculatedScore } });
    } else {
      alert("Please fill in all fields before submitting."); // Alert user
    }
    // const calculatedScore = calculateCibilScore();
    // setCibilScore(calculatedScore); // Set calculated score to state
    // console.log("Submitted Financial Data:", financialData);
    // console.log("Calculated CIBIL Score:", calculatedScore);
  }

  return (
    <div className="w-full h-auto flex items-center justify-center pt-10 md:pt-20 mb-10 md:mb-20">
      <form
        className="shadow-2xl p-8 md:px-24 bg-sky-100"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-semibold text-indigo-950 mb-5 md:mb-10 mt-5 text-center">
          LOAN ASSESSMENT FORM
        </h3>

        {/* ITR and Salary Information */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-indigo-900 font-semibold">ITR Type:</label>
            <select
              name="itrType"
              value={financialData.itrType}
              onChange={handleChange}
              className="w-full border-2 border-gray-500 rounded-md mb-3"
              required
            >
              <option value="">Select ITR Type</option>
              <option value="ITR-1">ITR-1</option>
              <option value="ITR-2">ITR-2</option>
              <option value="ITR-3">ITR-3</option>
              <option value="ITR-4">ITR-4</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-indigo-900 font-semibold">
              ITR Declared Income:
            </label>
            <input
              type="number"
              name="itrIncome"
              placeholder="Enter income as per ITR"
              value={financialData.itrIncome}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-500 rounded-md mb-3"
            />
          </div>
        </div>

        {/* Salary Information */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-indigo-900 font-semibold">
              Monthly or Annual Salary:
            </label>
            <input
              type="number"
              name="salary"
              value={financialData.salary}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-500 rounded-md mb-3"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-indigo-900 font-semibold">
              Bonuses and Incentives:
            </label>
            <input
              type="number"
              name="bonuses"
              value={financialData.bonuses}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-500 rounded-md mb-3"
            />
          </div>
        </div>

        {/* Property Information */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="grid gap-2">
            <label className="text-indigo-900 font-semibold">
              Type of Property:
            </label>
            <select
              className="w-full border-2 border-gray-500 rounded-md mb-3"
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

          <div className="grid gap-2">
            <label className="text-indigo-900 font-semibold">
              Estimated Market Value:
            </label>
            <input
              type="number"
              required
              name="propertyValue"
              value={financialData.propertyValue}
              onChange={handleChange}
              className="w-full border-2 border-gray-500 rounded-md mb-3"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-indigo-900 font-semibold">
              Rental Income (if applicable):
            </label>
            <input
              type="number"
              name="rentalIncome"
              required
              value={financialData.rentalIncome}
              onChange={handleChange}
              className="w-full border-2 border-gray-500 rounded-md mb-3"
            />
          </div>
        </div>

        {/* Interest Income Source */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-indigo-900 font-semibold">
              Interest Income Source:
            </label>
            <select
              name="interestSource"
              required
              value={financialData.interestSource}
              onChange={handleChange}
              className="w-full border-2 border-gray-500 rounded-md mb-3"
            >
              <option value="">Select Interest Source</option>
              <option value="savingsAccount">Bank Savings Account</option>
              <option value="fixedDeposit">Fixed Deposit</option>
              <option value="bonds">Bonds</option>
              <option value="other">Other Financial Instruments</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-indigo-900 font-semibold">
              Interest Income Amount:
            </label>
            <input
              type="number"
              name="interestIncome"
              required
              placeholder="Enter interest income"
              value={financialData.interestIncome}
              onChange={handleChange}
              className="w-full border-2 border-gray-500 rounded-md mb-3"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mb-10 mt-5">
          <button
            type="submit"
            className="bg-indigo-700 w-full md:w-1/2 h-10 text-white rounded-md hover:bg-indigo-400"
          
          >
            Submit Financial Data
          </button>
        </div>
        {cibilScore !== null && (
          <div className="text-center mt-5">
            <h4 className="text-lg font-semibold">
              Estimated CIBIL Score: {cibilScore}
            </h4>
          </div>
        )}
      </form>
    </div>
  );
}

export default FinancialInformation;
