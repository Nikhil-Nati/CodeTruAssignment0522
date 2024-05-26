import React from 'react'
import { Outlet } from 'react-router'

function GenerateDetails() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default GenerateDetails