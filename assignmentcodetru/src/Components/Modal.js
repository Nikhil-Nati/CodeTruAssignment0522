import React,{useContext} from 'react'
import { context } from '../App';
import trophy from "../Resources/trophy.jpg";

function Modal() {
    const {modal,setModal,finalAppr}=useContext(context);
  return (
    <div className="modal-content" style={{ display: modal || "none" }}>
        <h2>Congratulations</h2>
        <img src={trophy} alt="trophy" height="100px" width="100px" />
        <br />
        <p>
          Invite link successfull sent to{" "}
          {finalAppr.map((i) => {
            return <i>{i.value} </i>;
          })}
        </p>
        <button onClick={() => setModal(false)}>Okay</button>
      </div>
  )
}

export default Modal