import React from 'react'
import { Pie, PieChart, ResponsiveContainer, Sector,Cell, Label, Legend } from 'recharts'
import { sampleJson } from './sampleJson'


export default function PieChartSample() {
  return (
        <div class="card">
            <div className='card-header bg-primary text-white d-flex justify-content-between'>
                <h5>Pie Chart</h5>
                <button type="button" class="btn-close btn-close-white"></button>
            </div>
            <div class="card-body" style={{display:"block"}}>
                <ResponsiveContainer aspect={2}>
                <PieChart >
                    <Pie data={sampleJson.simple_chart} dataKey="pv" cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#8884d8"/>
                    <Pie data={sampleJson.simple_chart} dataKey="uv" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#82ca9d" label />
                </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
  )
}
