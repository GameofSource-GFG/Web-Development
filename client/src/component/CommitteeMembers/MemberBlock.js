import React, { Component } from 'react';

class MemberBlock extends Component {
  render() {
    return (
      <div className="container Member col-lg-3 col-md-3 col-sm-10 row flip-card">
         <div className="flip-card-inner">
        <div className="flip-card-front">
    <div className="col-8 name" >Member's Name</div>
        <div className="col-10 photo">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" width="100%"
          height="100%"></img></div>
        <div className="col-8 position">Member's position</div>  
      </div>
      <div class="flip-card-back">
      <h1>Details</h1> 
      <p>Profession</p> 
      <p>No. of blogs</p>
      <p>Native of</p>
      <p>Social Media links</p>
      <p>Other important details</p>
    </div>
      </div></div>
      

    );}}
    export default MemberBlock;