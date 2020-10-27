import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Commiittee from "./components/CommitteeMembers/committee";
import Homepage from "./components/Homepage/Homepage";
import Timeline from "./components/Timeline/timeline";
import ContactUs from "./components/Contact-Us/ContactUs";

function App() {
  return (
    <>
    {/* Use this for chnging appearing position of Scroll Buttton
     <ScrollTop showBelow={200} /> */}
      <Homepage />
    </>
  );
}
export default App;
