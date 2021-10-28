import React, { Component } from 'react'
import ReactEcharts from "echarts-for-react";
import { dbPie } from './DBPie';
export default class PieChart extends Component {

    getOption = () =>
    {
        return{
            title:{
                text:dbPie.Title.heading,
                subtext:dbPie.Title.subheading,
                left:'center',
                padding: [
                    0,  // up
                    0, // right
                    10,  // down
                    10, // left
                ]
            },
            tooltip:{
                trigger:'item'
            },
            legend:{
                orient:'vertical',
                left:'left'
            },
            series:[
                {
                    type:'pie',
                    radius: '60%',
                    data:dbPie.data, emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    
                }
                
            ]
        }
        
    }
    render() {
        return (
            <div>
            <center>  <h1>piechart</h1></center>
            <ReactEcharts option={this.getOption()}
            style={{ height: "50vh", left: 50, top: 50, width: "50vw" }}
            opts={{ renderer: "svg" }}
            />
           
            </div>
        )
    }
}
