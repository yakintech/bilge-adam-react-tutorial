import React, { useState } from 'react'
import { customersData } from '../data/customersData'


function Customers() {

    const [customers, setcustomers] = useState(customersData)

    //Country Spain ise o satırı kırmızı yap
    return (<>
        <button onClick={() => setcustomers([])}>Empty</button>
        <h4>Length: {customers.length}</h4>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Country</th>
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

                        </tr>

                    })
                }
            </tbody>
        </table>

    </>)
}

export default Customers