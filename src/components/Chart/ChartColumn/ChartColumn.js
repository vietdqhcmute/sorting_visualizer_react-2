import React from "react";
import classes from "./ChartColumn.module.css";
const chartColumn = (props) => {
  const style = {
    valueStyle: {
      height: "50%",
    },
    emptyStyle: {
      height: "50%",
    },
  };
  return (
    <div className={classes.Column}>
      <div className={classes.Column_value} style={style.valueStyle}></div>
      <div className={classes.Column_empty} style={style.emptyStyle}></div>
    </div>
  );
};
export default chartColumn;
