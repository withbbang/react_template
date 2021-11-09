import React, { useEffect } from "react";
import IndexPT from "./indexPT";

const IndexCT = (props) => {
  useEffect(() => {
    console.log("Index Component Rendered!");
  }, []);

  console.log(props);

  return <IndexPT value_1={props.value_1} example_1={props.example_1} />;
};

export default IndexCT;
