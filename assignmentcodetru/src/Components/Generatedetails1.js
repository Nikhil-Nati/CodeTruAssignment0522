import React,{useContext} from 'react';
import { context } from '../App';

function Generatedetails1() {
    const {Name,setName,dob,setDob,nav}=useContext(context);
    const inputHandler=(e)=>{
        switch(e.target.name){
        case "Name":
            setName(e.target.value);
            break;
        case "dob":
            setDob(e.target.value);
                break;
        default:
            break;
        }}
  return (
    <div><div>Basic Details</div>
        <input type="text" placeholder='Name' value={Name} name='Name' onChange={inputHandler}/>
        <input type="date" placeholder='Date of Birth' value={dob} name='dob' onChange={inputHandler}/><br/><br/>
        <button disabled={(Name.trim().length===0||dob.trim().length===0)}onClick={()=>nav('GenerateDetails2')}>Next</button>
    </div>
  )
}

export default Generatedetails1