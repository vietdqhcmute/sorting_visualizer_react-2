import React from "react";
import classes from "./Chart.module.css";
import Column from "./ChartColumn/ChartColumn";

const chart = (props) => {
  const columnWidth = parseInt(100 / props.randomList.length) * 100;
  const transformedChart = props.randomList.map((el) => {
    return (
      <Column columnWidth={columnWidth} key={"col_" + el} value={el} maximum={props.randomList.length}></Column>
    );
  });
  return <div className={classes.Chart}>{transformedChart}</div>;
};

export default chart;
