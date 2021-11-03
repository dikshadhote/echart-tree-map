import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { DBlifeExpectancy } from "./life-expectancy-table";
import * as echarts from 'echarts/core';

export default class LineRaceAnimation extends Component {

    
getOption()
{
    const countries = [
        'Finland',
        'France',
        'Germany',
        'Iceland',
        'Norway',
        'Poland',
        'Russia',
        'United Kingdom'
      ];
      const datasetWithFilters = [];
      const seriesList = [];
      echarts.util.each(countries, function (country) {
        var datasetId = 'dataset_' + country;
        datasetWithFilters.push({
          id: datasetId,
          fromDatasetId: 'dataset_raw',
          transform: {
            type: 'filter',
            config: {
              and: [
                { dimension: 'Year', gte: 1950 },
                { dimension: 'Country', '=': country }
              ]
            }
          }
        });
        seriesList.push({
          type: 'line',
          datasetId: datasetId,
          showSymbol: false,
          name: country,
          endLabel: {
            show: true,
            formatter: function (a) {
              return a.data.Country+': '+a.data.Income
            }
          },
          labelLayout: {
            moveOverlap: 'shiftY'
          },
          emphasis: {
            focus: 'series'
          },
          encode: {
            x: 'Year',
            y: 'Income',
            label: ['Country', 'Income'],
            itemName: 'Year',
            tooltip: ['Income']
          }
        });
      });


    return{
        animationDuration: 1000,
        dataset: [
          {
            id: "dataset_raw",
            dimensions: [
              "Income",
              "Life Expectancy",
              "Population",
              "Country",
              "Year",],
            source: [...DBlifeExpectancy]
          },
          ...datasetWithFilters
        ],
        title: {
          text: 'Income of Germany and France since 1950'
        },
        tooltip: {
          order: 'valueDesc',
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          nameLocation: 'middle'
        },
        yAxis: {
          name: 'Income'
        },
        grid: {
          right: 140
        },
        series: seriesList
    }
}


    render() {
        return (
           <ReactEcharts option={this.getOption()} style={{ height: "70vh", left: 50, top: 50, width: "70vw" }}/>
        )
    }
}
