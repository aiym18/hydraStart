import React from 'react';

const Join = () => {
    return (
        <div id='join'>
            <div className="container">
                <div className="join">
                    <h1>JOIN HYDRA</h1>
                    <hr />
                    <h3>Let’s Build Your VR Experience</h3>
                    <div className="inp">
                        <input type="text"  placeholder='First Name'/>
                        <input type="text"  placeholder='Name'/>
                    </div>
                    <div className="inp">
                        <input type="text"  placeholder='First Name'/>
                        <input type="text"  placeholder='Name'/>
                    </div>
                    <input className='inp1' type="text"  placeholder='Subject'/>
                    <input className='inp2' type="text"  placeholder='Tell Us Something...'/>
                    <button>SEND TO HYDRA</button>
                </div>
            </div>
        </div>
    );
};

export default Join;