'use client'

import { useRouter } from "next/navigation";

import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.css'
// import { json } from '@/app/data/survey_json'
import { json as testJson} from '@/app/data/survey2json'
import {surveyJson as testquiz} from "@/app/data/surveyQuizTestJSON"
import { surveyLocalization } from "survey-core"; 
import { LayeredLight } from "survey-core/themes";

const engLocale = surveyLocalization.locales["en"];
engLocale.completeButton = "Next";

export  function SurveyComponent() {
    const router = useRouter();
  const model = new Model(testquiz);
  model.applyTheme(LayeredLight);
  model.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 2));
    
    router.push('/thankyou');
  });
  return (
    <Survey model={model}/>
  );
}
