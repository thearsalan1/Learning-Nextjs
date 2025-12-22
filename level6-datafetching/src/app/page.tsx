'use client'
// Note - SSR , SSG, ISR works on server components
// import { revalidatePath } from 'next/cache'
import React, { useEffect } from 'react'

const page = () => {

  // THIS IS FOR SSR "SERVER SIDE RENDERING"
  // let res =await fetch('http://localhost:3000/api/user',{cache:'no-store'})
  // const data= await res.json();
  // console.log(data);
  

  // THIS IS FPR SSG - BY DEFAULT SSG WITHOUT CACHE
  // let response = await fetch('http://localhost:3000/api/user',{cache:'force-cache'})
  // let data = await response.json();
  // console.log(data);
  
  // ISR IN THIS WE CAN DEFINE TIME TO GET REFETCH DATA
  // let response = await fetch('http://localhost:3000/api/user',{next:{revalidate:5 }})
  // let data =await response.json();
  // console.log(data);
  

  // CLIENT SIDE RENDRING (CSR IN NORMAL REACT) FIRSTLY WE HAVE TO CREATE CLIENT PAGE

  const handleApi = async()=>{
    const response = await fetch('/api/user');
    const data = await response.json();
    console.log(data);
    
  }
  
  useEffect(()=>{
    handleApi()
  },[])

  return (
    <div>home</div>
  )
}

export default page