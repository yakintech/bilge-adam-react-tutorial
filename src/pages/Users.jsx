import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {

    const [users, setusers] = useState([])

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setusers(res.data)
        })

    }, [])
    

  return (<>
        <table className='w3-table-all'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>EMail</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(item => {
                        return <tr>
                            <td><Link to={'/users/' + item.id}>{item.id}</Link></td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
  </>
  )
}

export default Users