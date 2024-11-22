'use client';

import React from 'react';
import ServerComponentCopy from '@/app/components/server-component-copy';
import { headers } from 'next/headers';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default  function ClientComponent({children}: ClientComponentProps) {
  console.log('Client Component');
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}