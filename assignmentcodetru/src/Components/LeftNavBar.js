import React,{useState} from 'react'
import LeftNavBarItem from './LeftNavBarItem'

function LeftNavBar() {
    const [options,setOptions]=useState([{title:"Dashboard",iconContent:"space_dashboard"},
    {title:"Employees",iconContent:"group"},
    {title:"Placements",iconContent:"badge"},
    {title:"Time Sheets",iconContent:"calendar_clock"},
    {title:"Sales",iconContent:"trending_up"},
    {title:"Ledger",iconContent:"description"},
    {title:"Balance Sheets",iconContent:"pie_chart"},
    {title:"Expense Management",iconContent:"currency_exchange"},
    {title:"Payroll",iconContent:"clinical_notes"},
    ]);
    const [collapse,setCollapse]=useState(true)
  return (
    <div className="sidebar" style={{"width":collapse?"20px":"15%"}} >
      <a onClick={()=>setCollapse(!collapse)}><span className='material-symbols-outlined ' 
      style={{'paddingLeft':"15px",'paddingTop':"10px"}}>menu{collapse&&"_open"}</span></a>
    {options.map((option)=>
    <div className="sidebarLink">
      <LeftNavBarItem title={option.title}iconContent={option.iconContent} collapse={collapse}/>
    </div>
    )}
    </div>
  )
}

export default LeftNavBar