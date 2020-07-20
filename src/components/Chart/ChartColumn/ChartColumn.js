import React from "react";
import classes from "./ChartColumn.module.css";
const chartColumn = (props) => {
  const valuePercentage = parseInt((props.value / props.maximum) * 100);
  const emptyPercentage = 100 - valuePercentage;

  const style = {
    valueStyle: {
      height: valuePercentage + "%",
    },
    emptyStyle: {
      height: emptyPercentage + "%",
    },
    column:{
      width: props.columnWidth + "%"
    }
  };

  return (
    <div style={style.column} className={classes.Column}>
      <div className={classes.Column_value} style={style.valueStyle}>
        <label>{props.value}</label>
      </div>
      <div className={classes.Column_empty} style={style.emptyStyle}></div>
    </div>
  );
};
export default chartColumn;
