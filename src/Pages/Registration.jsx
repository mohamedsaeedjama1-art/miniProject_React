import React from 'react'
import Header from '../Tools/Header'

const Registration = () => {
  return (
   <>
   <Header header="Regiter Student Portal" />

   <section style={{position: "relative", left: 390, bottom: 700}}>
    <form action="" class="registration-form">
  <h1>Student Registration</h1>
  <p class="subtitle">Student Personal Information</p>

  <div class="form-grid">

    <div class="input-group">
      <label>First Name</label>
      <input type="text" placeholder="First Name" required />
    </div>

  
    <div class="input-group">
      <label>Last Name</label>
      <input type="text" placeholder="Last Name" required />
    </div>


    <div class="input-group">
      <label>Gender</label>
      <div class="radio-group">
        <label><input type="radio" name="gender" value="Male" /> Male</label>
        <label><input type="radio" name="gender" value="Female" /> Female</label>
      </div>
    </div>

  
    <div class="input-group">
      <label>Parent Phone</label>
      <input type="number" placeholder="Phone Number" />
    </div>

  
    <div class="input-group full-width">
      <label>Address</label>
      <input type="text" placeholder="Address" />
    </div>
  </div>

  <div class="submit-group">
    <input type="submit" value="Submit" class="btn-submit" />
  </div>
</form>
   </section>
   



   
   </>
  )
}

export default Registration
