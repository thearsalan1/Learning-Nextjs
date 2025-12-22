'use client'
import React, { useState } from 'react'
import Button from '../button';

const page = () => {
  const [count,setCount] = useState<number>(0);
  let num:number = count
  return (
    <div>
      <h1>Here is the button which change the count</h1>
      <Button data={"arsalan"} action={()=>{}}></Button>
    </div>
  )
}

export default page