import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetail() {

    const { id } = useParams()
    const [detail, setdetail] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => res.json())
            .then(data => setdetail(data))
    }
        , [])

    return (<>
        <hr />
        <h1>Product Detail</h1>
        <hr />
        <h3>Name: {detail.name}</h3>
        <h3>Price: {detail.unitPrice}</h3>
        <h3>Stock: {detail.unitsInStock}</h3>
        <h3>Quantity Per Unit: {detail.quantityPerUnit}</h3>
        <hr />
        <Button onClick={() => navigate(-1)}>Go Back!</Button>
    </>
    )
}

export default ProductDetail