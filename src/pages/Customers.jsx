import React, { useState } from 'react'
import { customersData } from '../data/customersData'


function Customers() {

    const [customers, setcustomers] = useState(customersData)


    const removeCustomer = (id) => {

        var isDelete = window.confirm("Are you sure?");

        if(isDelete){
            var filteredCustomers = customers.filter(q => q.id != id);
            setcustomers(filteredCustomers)
        }
      
    }

    const search = (value) => {
        
        var searchData = value.toLowerCase()

        var filteredCustomers = customersData.filter(q => q.companyName.toLowerCase().includes(searchData))

        setcustomers(filteredCustomers)

    }
    
    return (<>
        <button onClick={() => setcustomers([])}>Empty</button>
        <h4>Length: {customers.length}</h4>

        <hr />

        <div>
            <label htmlFor="">Search</label>
            <input type="text" onChange={(e) => search(e.target.value)} />
        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Country</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((item) => {

                        let color = ''
                        if (item.address?.country == "Spain") {
                             color = 'red'
                        }

                        return <tr style={{ backgroundColor: color }}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td>{item.address?.country}</td>
                            <td>
                                <button onClick={() => removeCustomer(item.id)}>Delete</button>
                            </td>
                        </tr>

                    })
                }
            </tbody>
        </table>

    </>)
}

export default Customers