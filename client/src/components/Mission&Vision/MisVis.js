import React from "react";
import "./MisVis.css";

const Mission = () => {
  return (
    <>
        <div class="mission-section">
        <div class="inner-container">
            <h1>Our Mission</h1>
            <p class="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque consequatur error quaerat, id dolores exercitationem recusandae velit enim dolorum ipsa qui, temporibus eos. Veritatis perspiciatis ad minima ex amet.
            </p>
        </div>
    </div>
    </>
  );
};

const Vision = () => {
  return (
    <>
     <div class="vision-section">
        <div class="inner-container">
            <h1>Our Vision</h1>
            <p class="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque consequatur error quaerat, id dolores exercitationem recusandae velit enim dolorum ipsa qui, temporibus eos. Veritatis perspiciatis ad minima ex amet.
            </p>
        </div>
    </div>
    </>
  );
};

function MisVis() {
  return (
    <>
      <Mission></Mission>
      <Vision></Vision>
    </>
  );
}

export default MisVis;
