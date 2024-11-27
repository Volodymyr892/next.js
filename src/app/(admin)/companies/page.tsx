import React from 'react';
import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddCompanyButton from '@/app/components/add-company-button';
import CompanyTablet from '@/app/components/company-tablet';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
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
    </>
  );
}
