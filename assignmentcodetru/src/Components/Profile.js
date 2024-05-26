import React from 'react';
import man2 from "../Resources/man2.jpg";

function Profile() {
  const [display,setDisplay]=React.useState(false);
  return (
    <div >
      
    <img src={man2} alt="trophy" height="50px" width="50px" className="profileImg"
    onClick={()=>setDisplay(true)}/>
    <div className="profileBox" style={{display:display?"block":"none"}}>
      <div className="profileItem" onClick={()=>setDisplay(false)}>
        <img src={man2} alt="profile"style={{borderRadius:"50%"}} height="50px" width="50px"/>
        <span style={{position:"absolute",top:"30px"}}>  Name</span> 
      </div>
      <div className="profileItem"><span className='material-symbols-outlined '>person</span> View Profile</div>
      <div className="profileItem"><span className='material-symbols-outlined '>build</span> Configuration</div>
      <div className="profileItem"><span className='material-symbols-outlined '>chat_bubble</span> Support</div>
      <div className="profileItem" style={{color:"red"}}><span className='material-symbols-outlined '>logout</span> Logout</div>
    </div>
    </div>
  )
}

export default Profile