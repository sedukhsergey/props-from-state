import React from "react";
import "./styles.css";
import BadCountExample from "./BadCountExample";
import GoodCountExample from "./GoodCountExample";

export default function App() {
  // initialize parent state counter
  const [count, setCount] = React.useState(0);
  const handleCountChange = () => {
    setCount(count => count + 1);
  };
  // Let's pass the state into the child CountExample component
  return (
    <div className="App">
      <BadCountExample count={count} />
      <hr />
      <GoodCountExample count={count} />
      <div>
        <button onClick={handleCountChange}>change count</button>
      </div>
    </div>
  );
}
