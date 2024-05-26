//import React from 'react'

function LeftNavBarItem(props) {
  return (
    <div >
    <span class='material-symbols-outlined'>{props.iconContent}</span>   <span style={{"display":props.collapse&&"none"}}>{props.title}</span>
    </div>
  )
}

export default LeftNavBarItem