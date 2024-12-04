import React from 'react';
import { getSummaryStats } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';

export interface PageProps {}



export default async function Page({}: PageProps) {
  const data = await getSummaryStats();
  const labelByStat: Record<keyof typeof data, string> ={
    promotions: 'Total promotions',
    categories: 'Total categories',
    newCompanies: 'New-companies',
    activeCompanies: 'Total active companies',
  };
  return (
    <div>
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => (
        <div key={key.toString()} className="col-span-3">
          <StatCard type={StatCardType.Gradient} label={labelByStat[key]} counter={data[key]} />
        </div>
      ))}
    </div>
  );
}