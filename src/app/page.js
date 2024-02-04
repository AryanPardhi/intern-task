"use client"
// import React from "react";
// import SideBar from "@/Components/sideBar";
// import Home from "@/Pages/Home";
// import Stories from "@/Pages/Stories";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// const Page = () => {

//   return (
//     <div className="flex" style={{ height: "100vh" }}>
//       <Router>
//       <SideBar/>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/stories" element={<Stories />} />
//       </Routes>
//     </Router>

//     </div>
//   );
// };

// export default Page;

// Import necessary Remix components
// Import necessary react-router-dom components
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import SideBar from '@/Components/sideBar';
import Home from '@/Pages/Home';
import Stories from '@/Pages/Stories';

const Page = () => {
  return (
    <div className="flex" style={{ height: '100vh' }}>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Page;
