import React from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis, Legend } from 'recharts'
import { sampleJson } from './sampleJson'

export default function SimpleAreaChart() {
    return (
        <div class="card">
            <div className='card-header bg-success text-white'>
                <h5>Pie Chart</h5>
            </div>
            <div class="card-body" style={{display:"block"}}>
                <ResponsiveContainer aspect={2}>
                <AreaChart data={sampleJson.simple_chart} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray={'3 3'}/>
                    <YAxis/>
                    <XAxis dataKey={'name'}/>
                    <Tooltip wrapperStyle={{"border" :" 1px dashed gray"}} wrapperClassName="custom-tooltip-charts"/>
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="`#8884d8`" fill="#8884d8"/> 
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    <Legend/>
                </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
  )
}
