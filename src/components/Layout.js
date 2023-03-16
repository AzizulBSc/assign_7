import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Addjob from './Addjob'
import Editjob from './Editjob'
import Joblist from './Jobs/Joblist'
import Nav from './Nav'
import Sidebar from './Sidebar'
export default function Layout() {
  return (
    <>
      <Nav />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar />
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
          <Router>
            <Routes>
              <Route path="/" element={<Joblist />} />
              <Route path="/Addjob" element={<Addjob />} />
              <Route path="/Editjob" element={<Editjob />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}
