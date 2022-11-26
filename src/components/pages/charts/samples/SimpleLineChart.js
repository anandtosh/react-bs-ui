import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,Legend } from 'recharts'
import { sampleJson } from './sampleJson'

export default function SimpleLineChart() {
  return (
        <div class="card">
            <div className='card-header bg-success text-white'>
                <h5>Line Chart</h5>
            </div>
            <div class="card-body" style={{display:"block"}}>
                <ResponsiveContainer aspect={2}>
                <LineChart data={sampleJson.simple_chart} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <XAxis dataKey="name" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis />
                    <Line type={'monotone'} dataKey="pv" stroke='blue' strokeDasharray={"8 5"}/>
                    <Line type={'monotone'} dataKey="uv" stroke='gray' strokeDasharray={"6 5"}/>
                    <Tooltip wrapperStyle={{"border" :" 1px dashed gray"}} wrapperClassName="custom-tooltip-charts"/>
                    <Legend/>
                </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
  )
}
