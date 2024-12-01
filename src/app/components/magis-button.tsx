'use client'

import React, { useEffect, useState } from 'react';
import Button, { ButtonProps } from '@/app/components/button';

export default function MagisButton(props: ButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(count >2){
      throw new Error('Unexpected error')
    }
  },[count])

  return (
    <Button {...props} onClick={()=> setCount(count+1)}>
      Magis button
    </Button>
  );
}