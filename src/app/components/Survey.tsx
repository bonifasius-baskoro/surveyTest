"use client";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useRouter } from "next/navigation";
import "survey-core/defaultV2.css";
// import { json } from '@/app/data/survey_json'
import { json as testJson } from "@/app/data/testSurveyjson";
import { surveyLocalization } from "survey-core";
import { LayeredLight } from "survey-core/themes";

const engLocale = surveyLocalization.locales["en"];
engLocale.completeButton = "Next";

export function SurveyComponent() {
  const router = useRouter();

  const model = new Model(testJson);

  model.applyTheme(LayeredLight);
  model.locale = "en";
  model.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 2));
    if(options.isCompleteOnTrigger === true){
        console.log("triggered");
        setTimeout(() => {
            console.log("This will run after a delay.");
        }, 2000);
        router.push('/thankyou');
        
    }else{
        setTimeout(() => {
            console.log("This will run after a delay.");
        }, 2000);
        router.push('/surveyquiz');
    }
    // router.push('/survey');
  });
  return <Survey model={model} />;
}
