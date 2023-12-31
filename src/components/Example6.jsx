import { useReducer } from 'react';

// reducer => state를 변경하는 로직이 담겨 있는 함수
const reducer = (state, action) => {
  if (action.type === 'PLUS') {
    return {
      count: state.count + 1,
    };
  }
  return state;
};

// dispatch => action 객체를 넣어서 실행

// action => 객체이고 필수 프로퍼티로 type을 가진다.

export default function Example() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const click = () => {
    dispatch({ type: 'PLUS' });
  };

  return (
    <div>
      <div>현재 카운트는 {state.count} 입니다.</div>
      <button onClick={click}>Click Me</button>
    </div>
  );
}
