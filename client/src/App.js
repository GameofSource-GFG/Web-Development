import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Commiittee from "./components/CommitteeMembers/committee";
import Homepage from "./components/Homepage/Homepage";
import Timeline from "./components/Timeline/timeline";
import ContactUs from "./components/Contact-Us/ContactUs";
// import React, { useEffect } from 'react';
// import ReactGA from 'react-ga';

function App() {
// // Enter your Google  Analytics tracking ID
//   useEffect(() => {
//     ReactGA.initialize('UA-');
//     // For reporting page viewers 
//     ReactGA.pageview(window.location.pathname + window.location.search);
//   }, [])

//   useEffect(() => {
//    console.log(window.location.pathname)
//   })
  return (
    <>
      <Homepage />
    </>
  );
}
export default App;
