import React from 'react'
import PieChart from './samples/PieChart'
import SimpleAreaChart from './samples/SimpleAreaChart'
import SimpleBarChart from './samples/SimpleBarChart'
import SimpleLineChart from './samples/SimpleLineChart'
import './charts.css'

export default function Charts() {
  return (
    <>
      <div className='row m-2 g-2'>
        <div className='col-md-6'>
          <SimpleLineChart/>
        </div>
        <div className='col-md-6'>
          <PieChart />
        </div>
        <div className='col-md-4'>
          <SimpleBarChart />
        </div>
        <div className='col-md-4'>
          <SimpleAreaChart />
        </div>
      </div>
    </>
  )
}
