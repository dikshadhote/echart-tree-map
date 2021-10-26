import "./App.css";
import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
class App extends Component {
  getOption = () => {
    return {
      
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
          },
        ],
      
    };
  };
  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        style={{ height: "80vh", left: 50, top: 50, width: "90vw" }}
      />
    );
  }
}
export default App;
