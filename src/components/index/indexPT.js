import React from "react";
import styles from "./styles.module.scss";

const IndexPT = (props) => {
  return (
    <div className={styles.wrap}>
      Hello, This Page Is Index Page!
      <button onClick={props.example_1}>click</button>
    </div>
  );
};

export default IndexPT;
