
import React, { useState } from 'react';
import './New.css'

function New() {
  let [showElement, setShowElement] = useState(false);

 
  let handleClick = () => {
     setShowElement(!showElement)
  };
 
  return (
    <div className='header'>
  <div class="and">
   <ul>
    <li></li>
    <li></li>
   </ul>
    
      {showElement && <div className='hidden_div'>
            <div  className="form-group">
                    <ul className='Ulist'>
                    <li>
                        <a href="li">Send SMS</a>
                    </li>

                    <li>
                        <a href="li">Send whatsapp message</a>
                    </li>

                    <li>
                        <a href="li">Send mail to buyer</a>
                    </li>

                    <li>
                        <a href="li">Send mail to seller</a>
                    </li>
                    <li>
                        <a href="li">Edit sauda </a>
                    </li>

                    </ul>
                
            </div>
      </div>}
      </div>
    </div>
  );
}

export default New;
