

import React, { useState } from 'react'

function StateBasicArraySample() {

    var staticCountries = ["Türkiye", "Almanya", "Japonya", "İran", "Rusya", "İngiltere"]

    const [cities, setCities] = useState(staticCountries)

    const empty = () => {
        setCities([])
    }

    return (<>

        <button onClick={empty}>Empty</button>
        <hr />
        <h1>Length: {cities.length}</h1>
        <hr />
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default StateBasicArraySample

