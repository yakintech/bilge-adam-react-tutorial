import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosSample() {

  const [categories, setcategories] = useState([])


  //useEffect içerisindeki kod SADECE BİR KERE ÇALIŞIR
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/categories")
      .then(res => {
        setcategories(res.data)
      })
  }, [])

  return (<>
    <h1>Length: {categories.length}</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map(item => {
            return <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  </>
  )
}

export default AxiosSample