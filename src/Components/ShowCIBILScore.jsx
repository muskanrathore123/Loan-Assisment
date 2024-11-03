import React from "react";
import { useLocation } from "react-router-dom";

function ShowCIBILScore() {
  const location = useLocation();
  const { cibilScore } = location.state || {}; // Destructure cibilScore from state

  const getCIBILDescription = (score) => {
    if (score >= 750) {
      return "Excellent: A score above 750 is generally considered excellent, which may help you secure loans with favorable interest rates.";
    } else if (score >= 650) {
      return "Good: This score indicates a responsible credit history, making it easier to secure loans.";
    } else if (score >= 550) {
      return "Fair: This score suggests a mixed credit history; while it may be possible to secure credit, the terms will likely be less favorable.";
    } else {
      return "Poor: A score in this range indicates a high risk for lenders, making it difficult to obtain credit.";
    }
  };

  return (
    <div className="p-5 grid  items-center justify-center ">
      <h2 className="text-2xl font-bold text-indigo-950 text-center">
        Your CIBIL Score
      </h2>
      <h3 className="text-4xl my-4 text-center font-bold">{cibilScore}</h3>
      <p className="text-lg my-2 text-center font-semibold">
        {getCIBILDescription(cibilScore)}
      </p>
      <h4 className="font-semibold mt-4 text-center text-orange-400 ">Understanding Your Score:</h4>
      <div className="flex justify-center items-center">
        <ul className="list-disc ml-5">
          <li>300 - 549: Poor</li>
          <li>550 - 649: Fair</li>
          <li>650 - 749: Good</li>
          <li>750 - 900: Excellent</li>
        </ul>
      </div>

      <p className="mt-4">
        Monitoring your CIBIL Score is crucial for managing your
        creditworthiness. Make sure to check your score regularly and maintain a
        healthy credit history!
      </p>
    </div>
  );
}

export default ShowCIBILScore;
