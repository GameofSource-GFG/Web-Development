import React, { Component } from 'react';
import MemberBlock from "./MemberBlock"

class Committee extends Component {
  render() {
    return (
      <div className="row Nopadding">
        <h1 className="col-12 Heading">GFG</h1>
        <h1 className="col-12 mainHeading">Committee Members</h1>
        <div className="row col-12 row1">
        <MemberBlock></MemberBlock>
        <MemberBlock></MemberBlock>
        <MemberBlock></MemberBlock></div>
        <div className="row col-12 row2">
        <MemberBlock></MemberBlock>
        <MemberBlock></MemberBlock>
        <MemberBlock></MemberBlock></div>
      </div>

    );}}
    export default Committee;