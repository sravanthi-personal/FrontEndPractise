import React from "react";
import { List } from "./List";

export const Test = () => {
  return (
    <div>
      <List
        items={[
          {
            id: 1,
            first: "bruce",
            last: "wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};
