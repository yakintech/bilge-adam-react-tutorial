import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Films() {

    const [films, setfilms] = useState([])
    const [search, setsearch] = useState("")
    const [year, setyear] = useState(2000)

    useEffect(() => {
        axios('https://www.omdbapi.com/?s=titanic&apikey=6706c9d')
            .then(res => {
                setfilms(res.data.Search)
            })

    }
        , [])


    const searchFilm = () => {
        axios('https://www.omdbapi.com/?s=' + search + '&y=' + year + '&apikey=6706c9d')
            .then(res => {
                setfilms(res.data.Search)
            })
    }

    return (<>
        <h1>Films</h1>
        <hr />
        <div>
            <label>Year</label>
            <input type="number" value={year} onChange={(e) => setyear(e.target.value)} />
        </div>
        <div>
            <label>Search By Name</label>
            <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} />
        </div>

        <button onClick={() => searchFilm()}>Search</button>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>imdbID</th>
                    <th>Type</th>
                    <th>Poster</th>
                </tr>
            </thead>
            <tbody>
                {
                    films.map(item => {
                        return <tr>
                            <td>{item.Title}</td>
                            <td>{item.Year}</td>
                            <td>{item.imdbID}</td>
                            <td>{item.Type}</td>
                            <td><img style={{ width: 50, height: 70 }} src={item.Poster} alt="" /></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default Films