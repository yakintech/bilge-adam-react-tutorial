import React, { useState } from 'react'

function StateArraySample2() {

    const [numbers, setnumbers] = useState([-1, 33])

    const addRandom = () => {
        const randomNumber = Math.floor(Math.random() * 1000)
        let newNumbers = [...numbers, randomNumber]

        setnumbers(newNumbers)

    }

    return (<>
        <button onClick={() => setnumbers([])}>Empty</button>
        <button onClick={addRandom}>Add Random Number</button>
        <hr />
        <h1>Length: {numbers.length}</h1>
        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default StateArraySample2