import React from 'react'
import { DashboardCard } from '../../styled/DashboardCard'
import TableWithImages from '../../styled/tables/TableWithImages'

export const Table = () => {
  return (
    <>
      <DashboardCard
      header={
        <>
          table example
        </>
      }
      footer={
        <>
            have footer
        </>
      }
      >
        <h1>Table with images</h1>
        <TableWithImages/>
      </DashboardCard>
    </>
  )
}
