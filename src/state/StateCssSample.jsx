import React, { useState } from 'react'

function StateCssSample() {

    const [bgColor, setbgColor] = useState('blue')

    return (<>
        <button onClick={() => setbgColor('tomato')}>Change Color</button>
        <hr />
        <div style={{ width: 200, height: 200, backgroundColor: bgColor }}>

        </div>
    </>)
}

export default StateCssSample