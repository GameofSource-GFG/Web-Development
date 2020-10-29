import React, { useRef } from "react";
import { useFormik } from 'formik'
import './ContactUs.css';
import firebase from '../firebase';
import sendEmail from '../Email service/Email';  // In the From Section Use this function => onSubmit={sendEmail}
function ContactUs() {
  // db variable for firestore
  var db = firebase.firestore()

  // reference for message word count span
  const countRef = useRef()

  // formik methods
  const formik = useFormik({
      initialValues: {
          name: "",
          phoneNo: "",
          email: "",
          subject: "",
      },
      handleChange: (e) => {
        console.log(e)
      },
      onSubmit: values => {
          db.collection("contactUsDetails")
            .add(values)
              .then(alert("Your message received"))
              .catch((err) => {
                console.log(err)
              })
      },
      
      validate: values => {
          let errors = {}
          if(!values.name){
            errors.name = "Name is Required*"
          }
          else if(!values.phoneNo){
            errors.phoneNo = "Mobile Number is required*"
          }
          else if(!/[6789][0-9]{9}/.test(values.phoneNo)){
            errors.phoneNo = "Mobile Number is not Valid*"
          }
          else if(!values.email){
            errors.email = "Email is required*"
          }
          else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "Email is not valid"
          }
          else if(!values.subject){
            errors.subject = "Message Field is required*"
          }
          else if(values.subject.length > 150){
            errors.subject = "Message limit is exceeded"
          }
          return errors
      },
      
  })

  // event handler for count messag words
  const handleKeyUp = (e) => {
    if(e.target.value.length > 150){
      countRef.current.innerText = `No words left`
    }
    else {
      countRef.current.innerText = `Total ` + (150 - e.target.value.length) + ` words are left`
    }
  }

  return (
    <div className="adder">
      <div className="field">
        <p className="heading-ContactUs">Contact Us</p>
        <div className="ev">
          <form className="forms" onSubmit={formik.handleSubmit}>     
            <label>Name </label>
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Your name.."
              className="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              style={{border: (formik.touched.name && formik.errors.name) ? "2px solid red" : "none"}}
            />
            <span className="errorMessage">{(formik.touched.name && formik.errors.name) ? formik.errors.name : ""}</span>

            <label>Contact no.</label>
            <input
              type="text"
              id="cno."
              name="phoneNo"
              placeholder="Your contact no."
              className="no"
              pattern="[6789][0-9]{9}"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNo}
              style={{border: (formik.touched.phoneNo && formik.errors.phoneNo) ? "2px solid red" : "none"}}
            />
            <span className="errorMessage">{(formik.touched.phoneNo && formik.errors.phoneNo) ? formik.errors.phoneNo : ""}</span>
            
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              style={{border: (formik.touched.email && formik.errors.email) ? "2px solid red" : "none"}}
            />
            <span className="errorMessage">{(formik.touched.email && formik.errors.email) ? formik.errors.email : ""}</span>
            
            <label>Your Message</label>
            <input
              id="subject"
              name="subject"
              placeholder="Write something.."
              className="msg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              style={{border: (formik.touched.subject && formik.errors.subject) ? "2px solid red" : "none"}}
              onKeyUp={handleKeyUp}
            ></input>
            <span className="errorMessage"
              style={{display: formik.touched.subject && formik.errors.subject ? "block" : "none"}}
            >
              {(formik.touched.subject && formik.errors.subject) ? formik.errors.subject : ""}
            </span>
            <span className="successMessage" ref={countRef}>{}</span>


            <input type="submit" value="Submit" className="sub" />
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactUs;
