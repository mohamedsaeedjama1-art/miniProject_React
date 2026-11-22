import React from 'react'
import Header from '../Tools/Header'
import Card from '../Tools/Card'

const Finance = () => {
  return (
   <>
   <Header header= "Finance Management"  />
   <section className='inputs2'>
  <p>Std Fee</p>
<input type="text"  onChange={(e) => setClassName(e.target.value)} placeholder='Student Name'/>
<input type="text" onChange={(e) => setClassType(e.target.value)} placeholder='Student Class'/><br></br>
<button onClick={()=> alert("Fee Submission Completed")} style={{height: 20, width: 40, background: "green" , color: "white"}}>Add</button>

 </section>
 <section style={{position: 'relative', top: 50, display : "flex", gap: 20}}>
   <Card name="Std Paid" number = {3}  />
    <Card name="std unpaid" number = {6} />
     <Card name="Total Cash" number={270}/>
 </section>
 <section style={{position: "relative", left: 160}}>
 <table>
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Student Class</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Abdi</td>
        <td>3A</td>
      </tr>
      <tr>
        <td>Mohammad</td>
        <td>7A</td>
      </tr>
      <tr>
        <td>Mousa</td>
        <td>8B</td>
      </tr>
    </tbody>
  </table>
  </section>

   </>
  
    
  )
}

export default Finance
