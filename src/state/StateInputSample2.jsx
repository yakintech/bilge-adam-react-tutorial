import React, { useState } from 'react'

function StateInputSample2() {

    const [color, setcolor] = useState("")

    return (<>

        <input type="text" onChange={(e) => setcolor(e.target.value)} />
        <hr />
        <div style={{ width: 400, height: 400, backgroundColor:color }}>

        </div>
    </>
    )
}

export default StateInputSample2