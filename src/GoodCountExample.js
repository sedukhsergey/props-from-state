import React from "react";

const GoodCountExample = props => {
  // if you need initialize state from the props use useEffect hook
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(props.count);
  }, [props.count]);

  return (
    <div>
      <p>GoodCountExample from local state {count}</p>
      <p>GoodCountExample from props {props.count}</p>
    </div>
  );
};

export default GoodCountExample;
