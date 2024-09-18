'use client'

import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.css'
// import { json } from '@/app/data/survey_json'
import { json as testJson} from '@/app/data/testSurveyjson'
import { surveyLocalization } from "survey-core"; 
import { LayeredLight } from "survey-core/themes";

const engLocale = surveyLocalization.locales["en"];
engLocale.completeButton = "Next";

export  function SurveyComponent() {
  const model = new Model(testJson);
  model.applyTheme(LayeredLight);
  model.locale = "en";
  return (
    <Survey model={model}/>
  );
}
