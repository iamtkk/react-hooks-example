import { useState } from 'react';

export default function Example7() {
  const [value, setValue] = useState('');

  return (
    <div>
      <input value={value} onChange={change} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
