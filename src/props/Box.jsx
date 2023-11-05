import React from 'react'

function Box({ width = 100, height = 100, color = "black" }) {


    return (<>
        <div style={{width:width, height: height, backgroundColor:color, borderStyle:'solid'}}>
        
        </div>
    </>
    )
}

export default Box