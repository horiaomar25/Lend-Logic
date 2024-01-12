import { useState } from "react";
import Step from "./Step";

export default function NewBuyerTimeline({ steps }) {
  const [seeStep, setSeeStep] = useState(new Array(steps.length).fill(false));

  // Toggle visibility when a step is clicked
  const handleClick = (index) => {
    //creates a new array newSeeStep that is a copy of the current state array seeStep
    const newSeeStep = [...seeStep];
    // Toggle the visibility status for the clicked step
    newSeeStep[index] = !newSeeStep[index];
    // Update the state with the modified seeStep array
    setSeeStep(newSeeStep);
  };

  return (
    <div data-testid="step-div" className="flex flex-col items-center py-4">
      {steps.map((step, index) => (
        <div data-testid="mapped-div"
          key={step.id}
          className={
            seeStep[index]
              ? "w-80 text-lg bg-off-white mb-4 font-normal flex flex-col items-center justify-center min-h-16 p-3 border-2 border-purple-accent rounded-[2rem] shadow-button cursor-pointer"
              : "w-80 text-lg bg-off-white mb-4 font-normal flex flex-col items-center justify-center min-h-16 p-3 border-2 border-purple-accent rounded-[2rem] shadow-button cursor-pointer hover:bg-purple-accent hover:text-off-white hover:font-semibold"
          }
          onClick={() => handleClick(index)}
        >
          <p className="text-xl">{step.title}</p>
          {seeStep[index] ? (
            <Step data-testid="step-id"
              key={step.id}
              title={step.title}
              tasks={step.tasks}
              id={step.id}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
