import React from 'react';
import CompanyTablet from '@/app/components/company-tablet';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';

export default function Page() {
  return (
      <CompanyTablet>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotions={true}
          country={"USA"}
          joinedDate={"02.19.2023"}
        />
      </CompanyTablet>
  );
}
