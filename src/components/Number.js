import React from "react";

export const Number = ({ resource }) => {
  const number = resource.number.read();
  return <div>Your random number is {number}</div>;
};
