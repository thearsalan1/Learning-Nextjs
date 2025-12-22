// we have to define variable type in ts
let a = 4

// if a is initialised as number then we can't store string in that 
// a="string" // not possible

let isboolean:boolean
isboolean=true;
// isboolean=1;    Not possible

let arr:number[];
arr=[78]
arr=[11,22,33,44]
// arr=["string"]  Not possible

let arr1:[number,string];
arr1=[2,"In this we can only put to values of the type defined this type of array is called TUPLE"]

enum Role{"user","admin"}

//  Any type 
let z:any;
z="string"
z=1
// Every variable is of any type at first

// Functions

function arsalan(a:string , b:number=4):number{
  console.log(a+b);
  return b
  // return a this is not possible coz funtion retun type is number
}

arsalan("Hello",12)
// arsalan(12,"Hello") This is not valid

// Type declaration and Type inference

let type=89  // type inference is we did not define the type but typescript know by itself that its type is this

let type2:number // This is type annotation we are defining the type

// Type Aliases
// type aliases is that we can create our own datatype
type Arsalan = number | string
// Here we have created a datatype name arsalan in which two type of values allowed which are number and string other will get errors
type status="success" | "error" | "pending" 
// this is the status type there are only three balues 
let sat:status="success"

// objects

type user = {
  name:string,
  age:number
}

let obj:user

obj={
  name:"arsalan",
  age:21
}

type post={
  title:string,
  description:string,
  image?:string,
  likes:number
}

let post1:post={
  title:"this",
  description:"This is the post type obj in this we have to provide all the sata in datatype except image coz it is optional",
  likes:40000
}


type Mathfunc = (a:number,b:number)=>number

let add:Mathfunc=(a,b)=>{
  return (a+b)
}
// add("hello",2) we can not give string in add
add(4,5)

// INTERFACES
interface User{
  id:number,
  name:string,
  email?:string,
  password:any,
}

let inter:User={
  id:1,
  name:"Arsalan",
  password:2132
}

type A = {
  a:number
};
type B= {
  b:string
}

type C = A&B;

let myType:C={
  a:1,
  b:"hello"
}

interface AA {
  a:number;
}
interface BB extends AA {
  b:string
}

let obj2:BB={
  a:3,
  b:"Arsalan"
}

// Generics 
// Generics are used when we dont know what type of funtion is when defining

function hello<T,P>(a:T,b:P){ 
}

hello(4,5)

let Aglobal:arsalan={
  name:"Arsalan"
}
let Bglobal:azka={
  name:"Arsalan",
  class:5
}
