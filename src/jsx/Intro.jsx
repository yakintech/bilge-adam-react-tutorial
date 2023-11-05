import React from 'react'

function Intro() {

    var name = "Çağatay"
    var surname = "Yıldız"
    var age = 18
    var onlineStatus = false

    var product = {
        name: "IPhone",
        price: 3300
    }


    return (<>
        <h1>Name: {name}</h1>
        <h1>Surname: {surname}</h1>
        <h1>Age: {age}</h1>
        <h1>Online Status: {onlineStatus}</h1>

        <hr />
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>

    </>)
}

export default Intro