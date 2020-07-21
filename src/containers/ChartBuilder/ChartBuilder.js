import React, { Component } from "react";

import ChartControl from "../../components/Chart/ChartControl/ChartControl";
import Chart from "../../components/Chart/Chart";
import classes from "./ChartBuilder.module.css";
const MAX_LENGTH = 30;
class ChartBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomList: this.intitialRandomList(MAX_LENGTH),
      maxLength: MAX_LENGTH,
    };
  }

  intitialRandomList = (maxLength) => {
    let arr = [];

    while (arr.length < maxLength) {
      let random = Math.floor(Math.random() * maxLength) + 1;
      if (arr.indexOf(random) === -1) arr.push(random);
    }
    return arr;
  };

  generateHandler = () => {
    const newRandonList = this.intitialRandomList(MAX_LENGTH);
    this.setState({ randomList: newRandonList });
  };

  bubbleSortHander = () => {
    this.bubbleSort(this.state.randomList);
  };

  bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (inputArr[j] > inputArr[j + 1]) {
          [inputArr[j], inputArr[j + 1]] = [inputArr[j + 1], inputArr[j]];
        }
        // UI not update intact
        setTimeout(() => this.setState({ randomList: inputArr }), 1000);
      }
    }
    return inputArr;
  };

  render() {
    return (
      <div className={classes.ChartBuilder}>
        <ChartControl
          generated={this.generateHandler}
          bubbleSorted={this.bubbleSortHander}
        ></ChartControl>
        <Chart randomList={this.state.randomList}></Chart>
      </div>
    );
  }
}

export default ChartBuilder;
