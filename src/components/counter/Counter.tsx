import * as React from "react";

export default class Counter extends React.Component {
  public state = {
    count: 0,
  };

  public increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  public decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  public render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
