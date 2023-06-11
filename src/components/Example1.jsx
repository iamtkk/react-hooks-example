import React from 'react';

export default class Example1 extends React.Component {
  state = { count: 1 };
  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <div>현재카운트는 {this.state.count} 입니다.</div>
        <button onClick={this.click}>Click Me</button>
      </div>
    );
  }
}
