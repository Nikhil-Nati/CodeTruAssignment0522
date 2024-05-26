import { Routes,Route } from 'react-router';
import React,{createContext,useState} from 'react';
import './App.css';
import LeftNavBar from './Components/LeftNavBar';
import GenerateDetails from './Components/GenerateDetails';
import Generatedetails1 from './Components/Generatedetails1';
import GenerateDetails2 from './Components/GenerateDetails2';
import Address from './Components/Address';
import PayConfig from './Components/PayConfig';
import { useNavigate, } from 'react-router-dom';
import trophy from "./Resources/trophy.jpg";
import Profile from './Components/Profile';

export const context =createContext();

function App() {
  const nav=useNavigate();
  const [Name,setName]=useState("");
  const [modal,setModal]=useState(false);
  const [dob,setDob]=useState("");
  const [mobile,setMobile]=useState("");
  const [email,setEmail]=useState("");
  const [addresses,setAddresses]=useState([]);
  const [selectedApprovers,setSelectedApprovers]= useState([{value:"one",label:"one"},
    {value:"two",label:"two"}]);
  return (
    <context.Provider value={{Name,setName,
    dob,setDob,
    mobile,setMobile,
    email,setEmail,
    addresses,setAddresses,
    selectedApprovers,setSelectedApprovers,
    nav,modal,setModal}}>
    <div className="modalDiv"style={{display:modal&&"block"}}></div>
    <div className='grid-container ' >
      <div className="grid-item1" ><LeftNavBar  />
      </div>
      <div className="grid-item2"><input type="text"placeholder='Search or Jump to ' className='input'></input>
      <span className='material-symbols-outlined spanButton'>search</span></div>
      <div className="grid-item3"><Routes>
        <Route path='/' element={<GenerateDetails/>}>
          <Route path='/' element={<Generatedetails1/>}/>
          <Route path='GenerateDetails2' element={<GenerateDetails2/>}/>
        </Route>
        <Route path="Address" element={<Address />}/>
        <Route path="Pay" element={<PayConfig />} />
      </Routes>
      </div>
      <div className="grid-item4"><Profile /></div>
    </div>
    <div className="modal-content" style={{"display":modal||"none"}}>
      <h2>Congratulations</h2>
      <img src={trophy} alt="trophy" height="100px" width="100px"/><br />
      <p>Invite link successfull sent to {selectedApprovers.map((i)=><i>{i.value} </i>)}</p>
    <button onClick={()=>setModal(false)}>Okay</button>
  </div>
  </context.Provider>
  );
}

export default App;
