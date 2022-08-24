import React, { Component } from "react";
import withCounter from "./withCounter";

class CounterHoc extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <p>{this.props.name}</p>
        <button onClick={incrementCount}>Count {count} Time</button>
      </div>
    );
  }
}

export default withCounter(CounterHoc);
