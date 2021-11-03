import React, { Component } from "react";
import { DBlifeExpectancy } from "./life-expectancy-table";
import ReactEcharts from "echarts-for-react";

export default class LineRace extends Component {
  getOption = () => {
    // var countries = [
    //   "Finland",
    //   "France",
    //   "Germany",
    //   "Iceland",
    //   "Norway",
    //   "Poland",
    //   "Russia",
    //   "United Kingdom",
    // ];

    console.log(DBlifeExpectancy[0].Country);
    return {
      animationDuration: 500,
      dataset: [
        {
          id: "dataset_raw",
          dimensions: [
            "Income",
            "Life Expectancy",
            "Population",
            "Country",
            "Year",
          ],
          source: [...DBlifeExpectancy],
        },
        {
          id: "dataset_since_2000_of_germany",
          fromDatasetId: "dataset_raw",
          transform: {
            type: "filter",
            config: {
              and: [
                { dimension: "Year", gte: 2000 },
                { dimension: "Country", "=": "Germany" },
              ],
            },
          },
        },
        {
          id: "dataset_since_2000_of_france",
          fromDatasetId: "dataset_raw",
          transform: {
            type: "filter",
            config: {
              and: [
                { dimension: "Year", gte: 2000 },
                { dimension: "Country", "=": "France" },
              ],
            },
          },
        },
      ],
      title: {
        text: "Income of Germany and France since 2000",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        nameLocation: "middle",
      },
      yAxis: {
        name: "Income",
      },
      grid: {
        right: 140
      },
      series: [
        {
          type: "line",
          datasetId: "dataset_since_2000_of_germany",
          showSymbol: false,
          encode: {
            x: "Year",
            y: "Income",
            itemName: "Year",
            tooltip: ["Country", "Income"],
            endLabel: {
              show: true,
              position:'top',
              formatter: function (params) {
                console.log(params)
              },
              labelLayout: {
                moveOverlap: "shiftY",
              },
              emphasis: {
                focus: "series",
              },
            },
          },
        },
        {
          type: "line",
          datasetId: "dataset_since_2000_of_france",
          showSymbol: false,
          encode: {
            x: "Year",
            y: "Income",
            itemName: "Year",
            tooltip: ["Country", "Income"],
            endLabel: {
              show: true,
              formatter: "{@[3]}: {@[1]}",
            },
          },
        },
      ],
    };
  };
  render() {
    return (
      <div>
        <h1>Line Race </h1>
        <ReactEcharts
          option={this.getOption()}
          style={{ height: "70vh", left: 50, top: 50, width: "70vw" }}
          opts={{ renderer: "svg" }}
        />
      </div>
    );
  }
}
