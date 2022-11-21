import React from 'react'
import { CgAirplane } from 'react-icons/cg'
import BriefCard from '../../styled/cards/BriefCard'
import { DashboardCard } from '../../styled/DashboardCard'

export const User = () => {
  return (
    <>
      <DashboardCard
      header={
        <>
          this is a header
        </>
      }
      footer={
        <>
          this is a footer
        </>
      }
      >
        <div className='d-flex flex-wrap'>
          <BriefCard/>
          <BriefCard icon={<CgAirplane size={30}/>}/>
          <BriefCard/>
          <BriefCard/>
        </div>
      </DashboardCard>
    </>
  )
}
