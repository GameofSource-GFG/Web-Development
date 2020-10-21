import React, { Component } from 'react';
import Block from "./committee"

class Label extends Component {
  render() {
    return (
      <div className="row col-12">
        <h1 className="col-12 mainHeading">Committee Members</h1>
        <div className="row row1">
        <Block></Block>
        <Block></Block>
        <Block></Block></div>
        <div className="row row2">
        <Block></Block>
        <Block></Block>
        <Block></Block></div>
      </div>

    );}}
    export default Label;