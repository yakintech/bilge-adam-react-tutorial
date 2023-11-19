import React, { useState } from 'react'
//HATALI
function EffectSample() {
    
    const [randomNumber, setrandomNumber] = useState(0)

    var random = Math.random() * 1000

    setrandomNumber(random)


  return (<>
    <h1>EffectSample</h1>
    <h1>{randomNumber}</h1>
  </>
  )
}

export default EffectSample

//bir state değişirse fonksiyon yeniden çalışır