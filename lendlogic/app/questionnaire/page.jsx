import GetStartedCard from "./GetStartedCard";
import PreferenceTool from "./PreferenceTool";
import Image from "next/image";
import { cookies } from "next/headers";
import QuestionnaireContent from "./QuestionnaireContent";

export default function Questionnaire() {
  //manage the preferences cookies
  async function setQuestionCookies(qNum, aNum) {
    "use server";
    cookies().set(qNum, aNum);
    // console.log(`Cookie set to ${qNum}:${aNum}`);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center m-auto min-max-width">
        <QuestionnaireContent cookieHandler={setQuestionCookies} />
      </div>
    </>
  );
}