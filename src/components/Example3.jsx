import React from 'react';

export default function Example3() {
  const [state, setState] = React.useState({ count: 1 });
  const click = () => {
    setState((prevState) => ({ count: prevState.count + 1 }));
  };

  return (
    <div>
      <div>현재 카운트는 {state.count} 입니다.</div>
      <button onClick={click}>Click Me</button>
    </div>
  );
}
