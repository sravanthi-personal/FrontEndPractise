import React from "react";
import { CounterMockProps } from "./CounterMockProps.types";

export const CounterMockFunction = (props: CounterMockProps) => {
  return (
    <div>
      <h1>Counter Mock Test</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};
