import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'

function LineChart(props) {
  return <Line data={props.testGraphData} />
}

export default LineChart