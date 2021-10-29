import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import {dbTreeMap} from './dbtree-map';
export default class TreeMap extends Component {

    
  getOption = () => {

     
      return {
        title:{
            text:"Disk Tree Map",
            left:"center"
        },
        legend:{
            orient:'horizontal',
            data:["female","male"],
            show:'true'
        },
        series:[
            {
                type:'treemap',
                data:dbTreeMap.assignment_groups,
                label:{
                    formatter: '{b}\n {@value}',
                    position: 'insideTopLeft'

                },
                levels: [
                    {
                        itemStyle: {
                          borderWidth: 0,
                          gapWidth: 5
                        }
                      },
                      {
                        itemStyle: {
                          gapWidth: 1
                        }
                      }
                ],
               
            
            }
        ]
      }
     
  };

  render() {
    return (
      <div>
        <h1>Tree map</h1>
        <ReactEcharts option={this.getOption()}
        style={{ height: "90vh", left: 50, top: 50, width: "90vw" }} />
      </div>
    );
  }
}
