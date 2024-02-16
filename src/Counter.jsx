import { useState, useRef } from "react";

function Counter() {
  // persisting state through rerenders

  const previousCount = useRef(0);
  const [count, setCount] = useState(0);

  const handleReset = () => {
    previousCount.current = count;
    setCount(0);
  };

  return (
    <div>
      <p>
        Previous count: <strong>{previousCount.current}</strong> Current Count:{" "}
        <strong>{count}</strong>
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{ marginBottom: "14px" }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{ marginBottom: "14px" }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button style={{ marginBottom: "14px" }} onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
