import { useState } from 'react';

export default function Example2() {
  const [count, setCount] = useState(1);
  const click = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>현재 카운트는 {count} 입니다.</div>
      <button onClick={click}>Click Me</button>
    </div>
  );
}
