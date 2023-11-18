import React, { useState } from 'react'
import { customersData } from '../data/customersData'


function Customers() {

    const [customers, setcustomers] = useState(customersData)

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [contactTitle, setContactTitle] = useState("")


    const removeCustomer = (id) => {

        var isDelete = window.confirm("Are you sure?");

        if (isDelete) {
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
        <hr />
        <div>
            <div>
                <label htmlFor="">Company Name</label>
                <input type="text" onChange={(e) => setcompanyName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Contact Name</label>
                <input type="text" onChange={(e) => setcontactName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Contact Title</label>
                <input type="text" onChange={(e) => setContactTitle(e.target.value)} />
            </div>
            <div>
                <button onClick={() => {
                    var newCustomer = {
                        id: customers.length + 1,
                        companyName: companyName,
                        contactName: contactName,
                        contactTitle: contactTitle
                    }
                    setcustomers([...customers, newCustomer])
                }}>Add</button>
            </div>
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


// check my number value is empty or not AND is number or not

var data = 33

if (data) {
    console.log("not empty")
}

//check isNan
if (!isNaN(data)) {
    console.log("number")
}