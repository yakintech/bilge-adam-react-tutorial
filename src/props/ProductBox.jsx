import React from 'react'

function ProductBox(props) {

    const { id, name, unitPrice, unitsInStock, categoryId, quantityPerUnit, color } = props


    return (<>
        <div style={{ borderStyle: 'solid', width: 300, height: 400, borderColor: color, margin:20 }}>
                <h3>ID: {id}</h3>
                <h3>Name: {name}</h3>
                <h3>Price: {unitPrice}</h3>
                <h3>Stock: {unitsInStock}</h3>
                <h3>Category Id: {categoryId}</h3>
                <h3>Quantity Per Unit: {quantityPerUnit}</h3>
        </div>
    </>
    )
}

export default ProductBox