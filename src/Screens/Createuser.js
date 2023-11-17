import React, { useState } from 'react'
import Navbar from '../Components/Navbar'

export default function Createuser() {
  const [cred, setCred] = useState({ name: "", email: "", password: "",phone:"" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/alumini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password,phone: cred.phone})
    })
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert("Enter valid credentials")
    }
  }
  const onChange = (event) => {
    setCred({ ...cred, [event.target.name]: event.target.value })
  }


  return (
    <div >
      <Navbar />


      

     
        <div class="container">
          <form  class="conatiner" onSubmit={handleSubmit}>
            
            <div class="formbold-form-title"><br /><br />
              <h2 class="">Create User :-</h2>
              <p>
                Please provide your details accuratly for better understanding 
              </p>
            </div>

            <div class="formbold-input-flex">
              <div>
                <label for="name" class="formbold-form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="formbold-form-input"
                  required
                  value={cred.name}
                  onChange={onChange}
                />
              </div>
              <div>
                <label for="password" class="formbold-form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="formbold-form-input"
                  required
                  value={cred.password}
                  onChange={onChange}
                />
              </div>
             
            </div>

            <div class="formbold-input-flex">
              <div>
                <label for="email" class="formbold-form-label"> Email </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="formbold-form-input"
                  required
                  value={cred.email}
                  onChange={onChange}
                />
              </div>
              <div>
                <label for="phone" class="formbold-form-label"> Phone number </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="formbold-form-input"
                  required
                  value={cred.phone}
                  onChange={onChange}
                />
              </div>
            </div>
            


            <button class="formbold-btn" type="submit">Register Now</button>
            </form>
            </div>
          </div>


       

  )
}
