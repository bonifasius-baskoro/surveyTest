import dynamic from 'next/dynamic';
import { SurveyComponent } from '../components/Survey';



export default function Survey() {
  return (
    <div className="flex h-screen p-8 sm:px-2">
      <SurveyComponent />
    </div>
  );
}
