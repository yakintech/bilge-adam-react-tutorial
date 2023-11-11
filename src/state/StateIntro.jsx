import React, { useState } from 'react'

//use kelimesiyle başlayan yapılar genellikle HOOK olarak tanımlanır.
//State hook
function StateIntro() {

    console.log('STATE INTRO FUNCTION RENDERED!! ');
    const [counter, setcounter] = useState(0)
    //counter uygulamada kullandığım değişken
    //setcounter counter değişkenini değiştirecek fonksiyon. Böylelikle fonksiyon yeniden çalışacak.

    const increase = () => {
        setcounter(counter + 1) // counter = counter + 1
    }

    return (<>
        <h1>{counter}</h1>

        <button onClick={increase}>Increase</button>
        <button onClick={() => setcounter(0)}>Empty</button>
        {/* <button onClick={() => increase()}>Increase</button> */}

    </>
    )
}

export default StateIntro


