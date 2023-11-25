import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateProductPage() {

    const { id } = useParams()


    const [name, setname] = useState('')
    const [unitPrice, setunitPrice] = useState(0)
    const [unitsInStock, setunitsInStock] = useState(0)

    //Güncellenecek ürünü öncelikle web api tarafından çekiyorum.

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
                setname(res.data.name)
                setunitPrice(res.data.unitPrice)
                setunitsInStock(res.data.unitsInStock)
            })
    }, [])

    const navigate = useNavigate()

    const updateProduct = () => {
        axios.put(`https://northwind.vercel.app/api/products/${id}`, {
            name: name,
            unitPrice: Number(unitPrice),
            unitsInStock: Number(unitsInStock)
        })
            .then(res => {

                navigate(`/products`)
            })
    }
    
    return (<>

        <h3>Update Product</h3>
        <hr></hr>
        <div>
            <div>
                <TextField value={name} placeholder='Name' onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <TextField  value={unitPrice} placeholder='Unit Price' onChange={(e) => setunitPrice(e.target.value)} />
            </div>
            <div>
                <TextField  value={unitsInStock} placeholder='Units In Stock' onChange={(e) => setunitsInStock(e.target.value)} />
            </div>
            <div>
                <Button onClick={() => updateProduct()}>Update Product</Button>
            </div>

        </div>
        
    </>
    )
}

export default UpdateProductPage