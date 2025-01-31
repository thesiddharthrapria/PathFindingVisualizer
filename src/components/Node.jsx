import React, { Component } from "react";

import "./Node.css";

export default class Node extends Component {

  constructor(props) {

    super(props);
    
    this.state = {};
  }

  render() {
    
    const { row,col,isFinish,isStart,isWall, isFlag, onMouseDown,onMouseEnter,onMouseUp,isWeight } = this.props;

    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : isFlag
      ? "node-flag"
      : isWeight
      ? "node-weight"
      : "";

    return (
      <td
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></td>
    );
  }
}