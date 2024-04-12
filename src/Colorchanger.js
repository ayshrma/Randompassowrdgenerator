import React, { useEffect, useRef, useState } from 'react'
import './Colorchanger.css'
export default function Colorchanger() {


  const myContainer = useRef(null);
  
  useEffect(() => {
    console.log("myContainer..", myContainer.current);
  });


  let red = {
    marginRight: '10px',
    backgroundColor: 'red',
    // button border radius
    borderRadius: '8px'
  };

  let gray = {
    marginRight: '10px',
    backgroundColor: 'gray',
    borderRadius: '8px'
  };

  let orange = {
    marginRight: '10px',
    backgroundColor: 'orange',
    borderRadius: '8px'
  };

  let pink = {
    marginRight: '10px',
    backgroundColor: 'pink',
    borderRadius: '8px'
  };

    let [color, setColor]= useState("olive")


    // divText.onClick = function()
    // {
    //   this.style.whiteSpace = this.style.whiteSpace == "normal" ? "nowrap" : "normal";
    // }
  return (
    <div>
    
     <div className="main" style={{backgroundColor: color}}>
     <div className="buttons" >
     <button className='Button' style={red} onClick={()=>setColor('red')}>Red</button>
     <button style={gray}onClick={()=>setColor('gray')}>Gray</button>
     <button style={orange} onClick={()=>setColor('orange')}>Orange</button>
     <button style={pink} onClick={()=>setColor('pink')}>Pink</button>
    {/* vertical ellipses */}
          <div ref={myContainer}>I can use the DOM with react ref</div>

    <div id="divText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta excepturi quisquam illo nisi non error enim amet corrupti, eos voluptate.</div>
      </div>
      </div>
    </div>
  )
}


// Subject: Application for Front End React Developer Position

// Dear [Hiring Manager's Name],

// I am writing to express my interest in the Front End React Developer role . With proficiency in React development and a passion for crafting seamless user experiences, I am eager to contribute to your team's projects. Please find my resume attached for your review.

// Thank you for considering my application.

// Best regards,
// [Your Name]