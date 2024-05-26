import React,{useContext} from 'react'
import Select from 'react-select';
import { MultiSelect } from "react-multi-select-component";
import { context } from '../App';

const Approvers=[{value:"one",label:"one"},
{value:"two",label:"two"},
{value:"three",label:"three"},
{value:"four",label:"four"},
{value:"five",label:"five"}];

function PayConfig() {
    const {selectedApprovers,setSelectedApprovers,modal,setModal} = useContext(context);
    const [level,setLevel]= React.useState(1);
  return (
    <div className='pay'>Pay Configuration
        {Array(level).fill(<div style={{"margin":"10px"}}>
<MultiSelect
        display="chip" options={Approvers}
        value={selectedApprovers}
        onChange={setSelectedApprovers}
        labelledBy={"Select Approvers..."}
        isCreatable={true}
        isMulti={true}
         /></div>)}
<a href="#" onClick={()=>setLevel(level+1)}>Add Level</a> 
<a href="#" style={{float:"right"}}  onClick={()=>{if(level>1) return setLevel(level-1)}}>Remove Level</a><br/><br/>
<button onClick={()=>setModal(true)} disabled={(selectedApprovers.length===0)}>Finish</button>
    </div>
  )
}

export default PayConfig