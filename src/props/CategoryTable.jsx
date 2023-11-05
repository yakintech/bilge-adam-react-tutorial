import React from 'react'

function CategoryTable(props) {

    
  return (<>
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
                    props.categories.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>

                    </tr>)
                }
            </tbody>
        </table>

  </>
  )
}

export default CategoryTable