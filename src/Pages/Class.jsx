import React from 'react'
import Card from '../Tools/Card'
import Header from '../Tools/Header'
import { useState } from 'react'



const Class = () => {

  const [className , setClassName] = useState("");
    const [classType , setClassType] = useState("");

    function Pops(){
    alert("you Added 1 Class");
    }
  return (
   <>
   <Header header = "Class Management" />
   <section style={{display: "flex", gap : 20}}>
    <Card name = "Total Classes" number = {12} />
    <Card name = "Total Students" number ={40} />
    <Card name = " Total Teacher" number= {3}/>
   </section>
 <section className='inputs'>
  <p>Add Class</p>
<input type="text" value={className} onChange={(e) => setClassName(e.target.value)} placeholder='Class name'/>
<input type="text" value={classType} onChange={(e) => setClassType(e.target.value)} placeholder='Class Type'/><br></br>
<button onClick={Pops} style={{height: 20, width: 40, background: "green" , color: "white"}}>Add</button>

 </section>
<table>
    <thead>
      <tr>
        <th>Class name</th>
        <th>Class Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3F</td>
        <td>Secondry</td>
      </tr>
      <tr>
        <td>Kg 2</td>
        <td>Kinder garden</td>
      </tr>
      <tr>
        <td>7G</td>
        <td>Intermediate</td>
      </tr>
    </tbody>
  </table>

   
   </>

  )
}

export default Class
