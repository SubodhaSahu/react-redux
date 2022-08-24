import React, { Component } from "react";

const withCounter = (WrappedComponent, countValue = 1) => {
  class withCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + countValue };
      });
    };
    render() {
      return (
        <>
          <h5> High Order Componet Example</h5>
          <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        </>
      );
    }
  }
  return withCounter;
};

export default withCounter;
