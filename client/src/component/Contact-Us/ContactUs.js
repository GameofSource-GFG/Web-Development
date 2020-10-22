import React, { Component} from 'react';

class ContactUs extends Component{
render() {
  return (
    <div className="field">
    <p>Contact Us</p>
    <div >
    <form>
    <label>Name </label>
    <input type="text" id="fname" name="yName" placeholder="Your name.."/>
    <label >Contact no.</label>
    <input type="text" id="cno." name="Phone no." placeholder="Your contact no." />


    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />


    <label>Your Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
  );
}
}
export default ContactUs;
