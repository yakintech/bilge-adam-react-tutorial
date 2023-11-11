import React, { useState } from 'react'

function StateCssSample3() {

    const [width, setwidth] = useState(200)
    const [height, setheight] = useState(200)


    const increase = () => {

        if(width == 1000 && height == 1000){
            setwidth(200)
            setheight(200)
        }
        else{
            setwidth(width + 100)
            setheight(height + 100)
        }
     


    }


    return (<>

        <button onClick={() => increase()}>Increase Sizes</button>
        <hr />

        <div style={{ width: width, height: height, borderStyle: 'solid' }}>

        </div>
    </>
    )
}

export default StateCssSample3