import React from "react";
import classes from "./Chart.module.css";
import Column from "./ChartColumn/ChartColumn";

const chart = (props) => {
  console.log(props);
  let transformedChart = props.randomList.map((el) => {
    return <Column key={"col_" + el} value={el}></Column>;
  });
  console.log(transformedChart)
  return <div className={classes.Chart}>{transformedChart}</div>;
};

export default chart;
