"use client";
import { useState } from "react";

export default function ReleaseEquityTool({ q2, value }) {
  const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } =
    value;

  const [equity, setEquity] = useState(500000 - loanAmount);
  const [borrowTime, setBorrowTime] = useState(20);
  const [monthlyEquityPayment, setMonthlyEquityPayment] = useState(0);

  function updateMonthlyPayment() {
    let payment = Math.floor(equity / borrowTime / 12);
    setMonthlyEquityPayment(payment);
  }
  return (
    <div className="mt-8 mx-4 text-center text-2xl">
      <p className="py-2 font-normal text-xl" data-testid="textValue">
        Your monthly equity payment will be{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{monthlyEquityPayment}{" "}
        </span>
        on top of your existing payment of{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{userMonthlyPayment}{" "}
        </span>
      </p>
      <p className="py-2 font-normal text-xl">
        How much would you like to borrow?{" "}
      </p>
      <div className="flex flex-col items-center justify-center">
        <span
          data-testid="equitySpan"
          className="pt-2 text-2xl font-bold text-purple-accent"
        >
          £{equity}{" "}
        </span>
        <input
          data-testid="equityValue"
          id="interestRate"
          className="w-1/2 py-2"
          type="range"
          min="5000"
          max="500000"
          step="1000"
          value={equity}
          onChange={(e) => {
            setEquity(e.target.value);
            updateMonthlyPayment();
          }}
        />
        <p className="pt-2 font-normal text-xl">
          How long would you like to borrow this equity for?{" "}
        </p>
        <span className="text-2xl font-bold text-purple-accent">
          {borrowTime} years{" "}
        </span>
        <input
          data-testid="borrowTime"
          id="interestRate"
          className="w-1/2"
          type="range"
          min="5"
          max={30}
          step="1"
          value={borrowTime}
          onChange={(e) => {
            setBorrowTime(e.target.value);
            updateMonthlyPayment();
          }}
        />
      </div>
    </div>
  );
}
