import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetail() {

    const { id } = useParams()

    const [detail, setdetail] = useState({})

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => {
                setdetail(res.data)
            })

    }, [])

    let url = "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"

    return (<>
        <hr />
        <img src={url} alt="" />
        <h1>User Detail Page</h1>
        <hr />
        <h3>Id: {id}</h3>
        <h3>Name: {detail.name}</h3>
        <h3>User Name: {detail.username}</h3>
        <h3>EMail: {detail.email}</h3>
        <h3>LAt-Lon: {detail?.address?.geo?.lat} {detail.address?.geo.lng}</h3>

    </>
    )
}

export default UserDetail