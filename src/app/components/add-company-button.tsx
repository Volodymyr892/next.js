'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from './button';
const CompanyFromModal = dynamic(()=> import("./company-form-modal"),{
  ssr: false,
})

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={()=> setShow(true)}>Add company</Button>
      <CompanyFromModal
        onSubmit={console.log}
        show={show}
        onClose={()=> setShow(false)}
      />
    </>
  );
}

