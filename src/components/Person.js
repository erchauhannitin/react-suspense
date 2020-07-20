import React from "react";

export const Person = ({ resource }) => {
  const person = resource.person.read();
  console.log("person ", person);
  return <div>Random Person is {person.name.first}</div>;
};
