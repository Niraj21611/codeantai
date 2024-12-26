import React from 'react'
import SideBar from '../components/DashBoard/SideBar'
import DashBoardLayout from '../components/DashBoard/DashBoardLayout'
import Respositories from '../components/DashBoard/Respositories'

function Home() {
  return (
    <DashBoardLayout>
      <SideBar/>
      <Respositories/>
    </DashBoardLayout>
  )
}

export default Home