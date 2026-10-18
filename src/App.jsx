import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Connect from './Components/Connect/Connect'
import Footer from './Components/Footer/Footer';
import { useState } from 'react'
import Nav from './nav/nav'
import Shop from './Components/Shop/Shop'
// import Form from './Form/Form'
import AdmissionForm from './Components/AdmissionForm/AdmissionForm'
// import Education from './Components/Education/Education'
// import ApplicationFee from './Components/ApplicationFee/ApplicationFee'
import TodoList from "./Components/Todolist/Todolist";
import AddTask from "./Components/Addtask/Addtask";
import EditTask from "./Components/Edittask/Edittask";
import CompletedTask from "./Components/Completedtask/Completedtask";


function App() {
  //  let userName =['Ali', 'Amna','Ahmad','Ayesha']
  //     console.log('hello World', userName)
  // let userName=[
  //   {
  //     name:'Ayesha',
  //     age:'22',
  //     rollnumber:'23',
  //     hobby:'Cooking'
  //   },
  //   {
  //     name:'Romaisa',
  //     age:'22',
  //     rollnumber:'28',
  //     hobby:'Playing'
  //   },
  //   {
  //     name:'Ayesha',
  //     age:'22',
  //     rollnumber:'13',
  //     hobby:'Baking'
  //   }
  // ]
  //   const[count,setCount]=useState(0)
  //   const handleClick=()=>{
  //     setCount(count+1)
  //   }
  //   useEffect(()=>{
  //     console.log('mounting Phase')
  //     return()=>{
  //       console.log('unmounting Phase')
  //     }
  // },[count])
  return (
    <>
      {/* <Nav/> */}
      {/* <Navbar/> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit" element={<EditTask />} />
        <Route path="/completed" element={<CompletedTask />} />
        {/* <Route path="/" element={<AdmissionForm />} /> 
       <Route path="/education" element={<Education />} /> 
       <Route path="/applicationfee" element={<ApplicationFee />} />  */}
        {/* <Route path="/" element={<Form />} />  */}
        {/* <Route path="/" element={<Shop />} />  */}
        {/* <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/connect" element={<Connect />} /> */}
      </Routes>
      {/* <Footer/> */}
      {/* <div>Hello,Welcome Back {userName}!</div>
    <ul>
      {
        userName.map((user,index)=> <li key={index}>{user}</li>)
      }
    </ul> */}
      {/* <div>
      {userName.map((user,index) => (<h2 key={index}>{user.name}</h2>))}
    </div> */}
      {/* <h1>{count}</h1>
    <div>Welcome to use Effect Hook</div>
    <button onClick={handleClick}>Increment</button> */}
    </>
  )
}

export default App


