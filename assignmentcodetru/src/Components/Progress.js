import React,{useContext,useState} from 'react';
import { context } from '../App';
import ProgressBar1 from './ProgressBar1';

function Progress() {
    
    const {currentStep, setCurrentStep,steps}=useContext(context);
    
  return (
    <div>
    <ProgressBar1 steps={steps} currentStep={currentStep} />
    <div className="buttons">
        </div></div>
  )
}

export default Progress