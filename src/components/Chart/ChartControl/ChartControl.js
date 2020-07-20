import React from "react";
import classes from './ChartControl.module.css'
const chartControl = (props) => (
  <div className={classes.ChartControl}>
    <div className={classes.ChartControl_GroupButton}>
    <button>Generate</button>
    <button>Bubble Sorting</button>
    </div>
  </div>
)

export default chartControl;
