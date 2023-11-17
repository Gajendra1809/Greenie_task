import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Popup from './Popup/Popup';

export default function Card(props) {
    const navigate = useNavigate();
    const [open,setopen]=useState(false);

    const handleDetailsClick = () => {
      navigate('/details', { state: { name: props.name, email: props.email, data:props.data } });
    };
  return (
    <div>
        <div class="card-container">
            <img class="round" src="human.jpg" alt="user" style={{height: "200px"}}/>
            <h3>{props.name}</h3>
          
            <p>{props.email}</p>
            <div class="buttons">
                
                <button class="primary ghost" onClick={() => setopen(true)} >
                    Details
                </button>
            </div>
            {
              open ? <Popup closepop={() => setopen(false)} data={props.data}/>: null
            }
        </div>
    </div>
  )
}
