import React from 'react';
import MagisButton from '@/app/components/magis-button';

export interface PageProps {

}

export default function Page() {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagisButton/>
    </main>
  );
}

