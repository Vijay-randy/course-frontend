import React, { useState, useCallback, useMemo } from 'react';

// ChildComponent wrapped with React.memo to prevent re-renders when props don't change
const ChildComponent = React.memo(({ onButtonClick }) => {
  console.log('ChildComponent rendered');

  return (
    <div>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
});

function UseMemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);  // Memoized function 

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

export default UseMemo;
