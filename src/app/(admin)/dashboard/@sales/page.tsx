import React from 'react';
import { getSummarySales } from '@/lib/api';
import DashboardCard from '@/app/components/dashboard-card';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import SummaryTableHeader from '@/app/components/summary-table-header';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales()
  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
        <>
          <SummaryTableHeader>Company</SummaryTableHeader>
          <SummaryTableHeader align="center">Sold</SummaryTableHeader>
          <SummaryTableHeader align="center">Income</SummaryTableHeader>
        </>
        }
      >
        {data.map(({companyId,companyTitle,sold, income})=>(
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{sold}</SummaryTableCell>
            <SummaryTableCell>{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}