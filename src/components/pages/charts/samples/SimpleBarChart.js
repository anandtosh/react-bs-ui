import React from 'react'
import { ResponsiveContainer,BarChart, Bar, CartesianGrid, YAxis, XAxis, Legend, Tooltip } from 'recharts'
import { sampleJson } from './sampleJson'


export default function SimpleBarChart() {
  return (
        <div class="card">
            <div className='card-header bg-success text-white'>
                <h5>Pie Chart</h5>
            </div>
            <div class="card-body" style={{display:"block"}}>
                <ResponsiveContainer aspect={2}>
                <BarChart data={sampleJson.simple_chart} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray={'3 3'}/>
                    <YAxis/>
                    <XAxis dataKey={'name'}/>
                    <Tooltip wrapperStyle={{"opacity" : '0.8', 'border' : '1px dashed red'}} />
                    <Bar dataKey="pv" fill="#8884d8"/>
                    <Bar dataKey="uv" fill="#82ca9d" />
                    <Legend/>
                </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
  )
}
