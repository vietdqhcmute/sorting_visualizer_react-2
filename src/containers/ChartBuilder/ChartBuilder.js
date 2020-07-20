import React, { Component } from "react";

import ChartControl from "../../components/Chart/ChartControl/ChartControl";
import Chart from "../../components/Chart/Chart";
import classes from "./ChartBuilder.module.css";

class ChartBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomList: this.generateRandomList(30),
    };
  }

  generateRandomList = (maxLength) => {
    let arr = [];

    while (arr.length < maxLength) {
      let random = Math.floor(Math.random() * maxLength) + 1;
      if (arr.indexOf(random) === -1) arr.push(random);
    }
    return arr;
  };

  render() {
    return (
      <div className={classes.ChartBuilder}>
        <ChartControl></ChartControl>
        <Chart randomList={this.state.randomList}></Chart>
      </div>
    );
  }
}

export default ChartBuilder;
