import { DataGrid, trTR } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataGridSample() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                console.log(res.data)
                setproducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const columns = [
        {
            field:'id',
            headerName:'Product ID',
            width:150
        },
        {
            field:'name',
            headerName:'Name',
            width:150
        },
        {
            field:'unitPrice',
            headerName:'Unit Price',
            width:150
        },
        {
            field:'unitsInStock',
            headerName:'Stock',
            width:150
        }
    ]

    return (<>
        <DataGrid
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
            rows={products}
            columns={columns}
            pageSizeOptions={[5, 10, 25]}
        />
    </>
    )
}

export default DataGridSample