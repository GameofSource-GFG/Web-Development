import React, { Component } from "react";

class MemberBlock extends Component {
  render() {
    return (
      <div className="container1 Member col-lg-3 col-md-3 col-sm-8 col-xs-1  row flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="col-8 name">Member's Name</div>
            <div className="col-10 photo">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                width="100%"
                height="100%"
                alt="photo"
              ></img>
            </div>
            <div className="col-8 position">Member's position</div>
          </div>
          <div class="flip-card-back">
            <h1 className="details">Details</h1>
            <p className="para">Profession</p>
            <p className="para">No. of blogs</p>
            <p className="para">Native of</p>
            <p className="para">Social Media links</p>
            <p className="para">Other important details</p>
          </div>
        </div>
      </div>
    );
  }
}
export default MemberBlock;
