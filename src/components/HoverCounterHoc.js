import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounterHoc extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <p>{this.props.name}</p>
        <h1 onMouseOver={incrementCount}>Count {count} Time </h1>
      </div>
    );
  }
}

export default withCounter(HoverCounterHoc, 10);
