import React from 'react'
import "./popup.css"
export default function Popup({closepop, ...props}) {

    
  return (
    <div className="popup-container">
     <div className="popup-body"><br />
      <h1>Details :-</h1>&nbsp;
       <h3>{props.data.name}</h3>
       <h3>{props.data.email}</h3>
       <h3>{props.data.phone}</h3>
       <h3>{props.data.college}</h3>
        <button onClick={closepop} class="btn btn-danger">X</button>
 
      
     </div>
    </div>
  )
}
