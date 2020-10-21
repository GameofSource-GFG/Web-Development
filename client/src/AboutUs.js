import React, {Component} from 'react';
import ReactDom from 'react-dom';
// import './Aboutus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faComment, faLightbulb, faProjectDiagram, faTrophy } from '@fortawesome/free-solid-svg-icons'

// const inner = () => {
   
//         return (
//         <div className="container">
//         <h1>About Us</h1>
//         <h2>Welcome to the world of Geeks!!</h2>
//         <p class="text">
//             We are a diverse team of budding intellectuals, who are keen and higly driven to create. As the official representatives of GeeksforGeeks organization on the campus, our aim is to instill the student community with the most recent innovations in technology.
//         </p>
//         </div>
//     )
// }

// export default inner;

const Header=()=>{
    return(
        <>
     <div className="about-section">
        <div className="inner-container">
            <h1>About Us</h1>
            <h2>Welcome to the world of Geeks!!</h2>
            <p className="text">
                We are a diverse team of budding intellectuals, who are keen and higly driven to create. As the official representatives of GeeksforGeeks organization on the campus, our aim is to instill the student community with the most recent innovations in technology.
            </p>
            <div className="skills">
                <span>Learn</span>
                <span>Testimonials</span>
                <span>Programming</span>
                <span>Coding</span>
            </div>
        </div>
    </div>
        
    
        
      </> 
    )
  }
  
  const Footer=()=>{
    return( <>
    <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">Our skills</h1>
          <div className="border"></div>
          <div className="services-container">
  
            <div className="service-box">
              <div className="service-icon">
              <FontAwesomeIcon icon={faTrophy} className="i"/>
              </div>
              <div className="service-title">Programming</div>
              <div className="service-desc">
                Programming is the process of creating a set of instructions that tell a computer how to perform a task.
              </div>
            </div>
  
            <div className="service-box">
              <div className="service-icon">
              <FontAwesomeIcon icon={faProjectDiagram} className="i"/>
              </div>
              <div className="service-title">Projects</div>
              <div className="service-desc">
                A project is as any undertaking, carried out individually or collaboratively and possibly involving research or design, that is carefully planned to achieve a particular aim. 
              </div>
            </div>
  
            <div className="service-box">
              <div className="service-icon">
              <FontAwesomeIcon icon={faComment} className="i"/>
              </div>
              <div className="service-title">Testimonials</div>
              <div className="service-desc">
                In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
  
  function inner() {
    return (
      <>
       <Header></Header>
       <Footer></Footer>
      </> 
    );
  }
  
  export default inner;
