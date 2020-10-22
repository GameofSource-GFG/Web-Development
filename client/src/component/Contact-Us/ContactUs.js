import React, { Component} from 'react';

class ContactUs extends Component{
render() {
  return (
    <body className="adder">
    <div className="field">
    <p className="para">Contact Us</p>
    <div className="ev">
    <form className="forms">
    <label >Name </label>

    <input type="text" id="fname" name="yName" placeholder="Your name.." className="name"/>
    <label >Contact no.</label>

    <input type="text" id="cno." name="Phone no." placeholder="Your contact no." className="no" />


    <label >Email</label>

    <input type="email" id="email" name="email" placeholder="Your email" className="mail"/>


    <label >Your Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.." className="msg"></textarea>
    <input type="submit" value="Submit" className="sub" />
    </form>
    </div>
    </div>
    </body>
  );
}
}
export default ContactUs;
