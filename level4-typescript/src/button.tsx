import React from 'react'

type buttonProps={
  data:string,
  action:()=>void
}

const Button:React.FC<buttonProps>=({data,action}) =>{
  return (
    <div>{data}</div>
  )
}

export default Button