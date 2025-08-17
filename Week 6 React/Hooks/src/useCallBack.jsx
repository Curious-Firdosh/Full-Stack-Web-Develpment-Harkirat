import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('👶 Child rendered');
  return <button onClick={onClick}>Click Me</button>;
}

const MemoChild = React.memo(Child);

function Parent() {
  const [count, setCount] = useState(0);

  // Now this function stays the same unless dependencies change
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <MemoChild onClick={handleClick} />
    </div>
  );
}

export default Parent
