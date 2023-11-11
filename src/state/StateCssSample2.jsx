import React, { useState } from 'react'

function StateCssSample2() {

    const [x, setx] = useState(200)
    const [y, sety] = useState(200)


    const randomGenerate = () => {

        var randomX = Math.floor(Math.random() * 1000)
        var randomY = Math.floor(Math.random() * 1000)

        setx(randomX)
        sety(randomY)

    }

    return (<>
        <button onClick={randomGenerate}>Random Generate</button>
        <hr />
        <div style={{ width: x, height: y, borderStyle: 'solid' }}>

        </div>

    </>)
}

export default StateCssSample2