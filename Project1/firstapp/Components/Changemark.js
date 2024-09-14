"use client"
import React, { useState } from 'react'

function Changemark() {   // Renamed 'Header' to 'Header' to follow React component naming convention.


    // useState hook is used to create a state variable 'num' and a function 'setnum' to update it.
    const [num, setnum] = useState(80);  // Initial value of 'num' is set to 80.

    // Function to change the value of 'num' to 60 when called.
    function changeNumber() {
        setnum(60);  // Updates the state variable 'num' to 60.
    }


    return (
        <>

            <div className='p-10 w-100 justify-center content-center'>

                {/* Displays the current value of 'num' */}
                <h2 className="text-6xl p-2 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    The Marks of Rohan is {num}
                </h2>

                {/* Button to trigger the changeNumber function */}
                <button onClick={changeNumber} className='rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>Click</button>
            </div>
        </>
    )
}

export default Changemark;   // Exporting the component to use it in other parts of the app.
