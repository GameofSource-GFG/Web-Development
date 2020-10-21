import React, { Component } from 'react';

class Block extends Component {
  render() {
    return (
      <div className="cointainer col-4 row" style={{border:"10px", borderColor:"blue"}}>
    <div className="col-8 name" style={{textAlign:"left"}}>Member's Name</div>
        <div className="col-10 photo" style={{borderRadius:"50%"}}>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" width="100%"></img></div>
        <div className="col-8 position" style={{textAlign:"right"}}>Member's position</div>  
      </div>

    );}}
    export default Block;