import React, { useState } from 'react'

function StateInputSample() {

    const [name, setname] = useState("")
    const [users, setusers] = useState([])


    const add = () => {
        setusers([...users, name])
    }

    return (<>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>
        <hr />
        <div>
            <ul>
                {
                    users.map(item => <li>{item}</li>)
                }
            </ul>
        </div>
    </>
    )
}

export default StateInputSample