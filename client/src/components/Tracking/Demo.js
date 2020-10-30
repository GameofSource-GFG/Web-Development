// For Reference Only

import React from "react";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

function Demo() {
// Enter your Google  Analytics tracking ID
 useEffect(() => {
   ReactGA.initialize('UA-');
   // For reporting page viewers 
  ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
  console.log(window.location.pathname)
   })
  return (
    <>
      <h1>Welcome to the wor of Geeks!!</h1>
    </>
  );
}
export default Demo;