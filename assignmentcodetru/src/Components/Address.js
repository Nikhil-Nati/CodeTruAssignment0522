import React,{useContext,useEffect,useState} from 'react';
import { context } from '../App';

function Address() {
 const [Line1,setLine1]=useState("");
 const [Line2,setLine2]=useState("");
 const [addressId,setIddressId]=useState(0);
 const {addresses,setAddresses,nav,currentStep, setCurrentStep}=useContext(context);
 
const inputHandler=(e)=>{
switch(e.target.name){
    case "Line1":
        setLine1(e.target.value);
        break;
    case "Line2":
        setLine2(e.target.value);
            break;
    default:
        break;
    }

}
useEffect(()=>{
    console.log(addresses);
},[addresses])
const submit=()=>{
   setAddresses([...addresses,{addressLine1:Line1,addressLine2:Line2,idnty:addressId}]);
   setLine1(""); 
   setLine2("");
   setIddressId(addressId+1);
}
const remove=(idnty)=>{
    setAddresses(addresses.filter((j)=> j.idnty!=idnty));
                 }

  return (
    <div>
        <input type="text" placeholder='Address Line1'value={Line1} name="Line1" onChange={inputHandler}/>
        <input type="text" placeholder='Address Line2'value={Line2} name="Line2" onChange={inputHandler}/>
        <button onClick={submit}disabled={(Line1.trim().length===0||Line2.trim().length===0)}>Done</button>
        {
        addresses.map((address)=>{
        return <div>
        <span className="data">{address.addressLine1}</span> <span className="data">{address.addressLine2}</span>
        <button className="action"onClick={()=>remove(address.idnty)} id={address.idnty}>
            <span class="material-symbols-outlined">delete</span>
        </button>
        
        <hr style={{width:"500px",marginLeft:"0px"}}></hr>
    </div>
    })
    }
    <br/><br/>
    <button disabled={(addresses.length===0)}
    onClick={()=>{nav('Pay');
    if(currentStep<3)setCurrentStep(currentStep+1)}}>Next</button></div>
  )
}

export default Address