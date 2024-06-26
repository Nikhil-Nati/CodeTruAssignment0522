import React,{useContext} from 'react';
import { context } from '../App';

function GenerateDetails2() {
    const {mobile,setMobile,email,setEmail,nav,currentStep, setCurrentStep}=useContext(context);
    const inputHandler=(e)=>{
        switch(e.target.name){
        case "email":
            setEmail(e.target.value);
            break;
        case "mobile":
            setMobile(e.target.value);
                break;
        default:
            break;
        }}
  return (
    <><div>Contact Details</div>
    <input type="text" placeholder="E-Mail"value={email} name="email"onChange={inputHandler}/>
    <input type="text" placeholder="Mobile Number" value={mobile} name="mobile"onChange={inputHandler}/><br/><br/>
    <button disabled={(mobile.trim().length===0||email.trim().length===0)}
    onClick={()=>{nav('Address');
    if(currentStep<=3)setCurrentStep(currentStep+1)}}>Next</button>
    </>
  )
}

export default GenerateDetails2