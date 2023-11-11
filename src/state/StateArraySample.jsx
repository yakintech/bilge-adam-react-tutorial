import React, { useState } from 'react'

function StateArraySample() {

    const [color, setcolor] = useState('black')

    let randomColors = ["orange", "yellow", "red", "black", "tomato", "aqua", "green", "gray", "pink", "purple"]

    //Butona her tıkladığımda diziden rastgele bir renk seçip div arka planını o renge çevirsin.


    const changeRandom = () => {

        let randomIndex = Math.floor(Math.random() * randomColors.length)

        let randomColor = randomColors[randomIndex]
        setcolor(randomColor)

    }

    return (<>
        <button onClick={changeRandom}>Change Random Color</button>
        <hr />
        <div style={{ width: 500, height: 500, backgroundColor: color }}>

        </div>
    </>
    )
}

export default StateArraySample