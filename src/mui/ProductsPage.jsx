import { Button, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProductsPage() {

    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true);

    //Add product inputs state
    const [name, setname] = useState('')
    const [unitPrice, setunitPrice] = useState(0)
    const [unitsInStock, setunitsInStock] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
                setLoading(false)
            })
    }

    const removeProduct = (id) => {
        setLoading(true)
        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
                alert('Success')
                loadProducts()
            })
    }


    const goToDetail = (id) => {

        if (id) {
            navigate(`/products/${id}`)
        }

    }

    let columns = [
        {
            field: 'id',
            headerName: 'Product ID',
            width: 150
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 250
        },
        {
            field: 'unitPrice',
            headerName: 'Unit Price',
            width: 150,
            renderCell: (item) => <>{Number(item.row?.unitPrice)?.toFixed(2)}</>
        },
        {
            field: 'unitsInStock',
            headerName: 'Stocks',
            width: 150
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 150,
            renderCell: (item) => <><Button color='error' onClick={() => removeProduct(item.id)} variant='contained'>Delete</Button></>
        },
        {
            field: 'detail',
            headerName: 'Detail',
            width: 150,
            renderCell: (item) => <><Button onClick={() => goToDetail(item.id)} variant='contained'>Go Detail</Button></>
        },
        {
            field: 'update',
            headerName: 'Update',
            width: 150,
            renderCell: (item) => <>
            <Button color='secondary' onClick={() => navigate('/products/update/' +  item.id)} variant='contained'>Update</Button>
            </>
        }
    ]


    const addProduct = () => {
        setLoading(true)
        axios.post('https://northwind.vercel.app/api/products', {
            name: name,
            unitPrice: Number(unitPrice),
            unitsInStock: unitsInStock
        })
            .then(res => {
                loadProducts()
                setname('')
                setunitPrice(0)
                setunitsInStock(0)
            })
    }

    return (<>
        <hr />
        <h1 style={{ textAlign: 'center' }}>Products Page</h1>

        <hr />
        <h2>Add Product</h2>
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
                <Button onClick={() => addProduct()}>Add Product</Button>
            </div>

        </div>

        <hr />
        <h2>Products</h2>
        <DataGrid
            rows={products}
            columns={columns}
            loading={loading}
        />
    </>
    )
}

export default ProductsPage