import React from 'react'
import Nav from '../Components/Nav'
import Card from '../Tools/Card'
import './AllPages.css'

const Home = () => {
  return (

  
    <>
<h1 id='h1'>School Management System</h1>
    
    <main style={{display: "flex", gap: 20}}>
      

 <Card name = "Student" number = {12}/>
  <Card name = "Teachers" number = {3} />
   <Card name= "Classes" number = {3} />
   </main>

   <section className='Upcoming'>
    <h4>Upcoming Eevents</h4>
    <hr />
    <p>Final Exam <b>12 Dec</b></p>
    <p>Holidays <b>1 Jan</b></p>
    <p>Back To School <b>2 feb</b></p>
    <p>What</p>
   </section>
  
    </>
  )
}

export default Home
