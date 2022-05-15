import React from "react";

import classes from "./Loading.module.css";

function Loading() {
  return (
    <div className={classes.loading}>
      <div className={classes["loading-circle"]}></div>
      <span className={classes["loading-text"]}>Loading...</span>
    </div>
  );
}

export default Loading;
