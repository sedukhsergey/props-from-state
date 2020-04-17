import React from "react";

const BadCountExample = props => {
  // dont initialize state imidietly from props !!!!
  // useState will initialize only once, when component create
  // if props.count changes useState doesn't call again
  const [count, setCount] = React.useState(props.count);

  return (
    <div>
      <p>BadCountExample from local state {count}</p>
      <p>BadCountExample from props {props.count}</p>
    </div>
  );
};

export default BadCountExample;
