import React, { useState } from 'react'

const Test = () => {
    const [isOn, setIsOn] = useState(false)
    return (
        <div>
            <button className='bg-amber-300 p-5' onClick={() => setIsOn(!isOn)}>
                <h1 className='text-text-100'>{isOn ? "ON" : "OFF"}</h1>
            </button>
        </div>
    )
}

export default Test
