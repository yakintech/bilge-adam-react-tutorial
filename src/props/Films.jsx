import React from 'react'
import FilmBox from './FilmBox'

function Films() {

    let films = {
        "Search": [
            {
                "Title": "Gladiator",
                "Year": "2000",
                "imdbID": "tt0172495",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
            },
            {
                "Title": "Gladiator",
                "Year": "1992",
                "imdbID": "tt0104346",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BM2U0NWE2ZDMtOGMzZS00MjRlLTgyNTItMTgwNTFjNjcyNDk2XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
            },
            {
                "Title": "The Gladiator",
                "Year": "1986",
                "imdbID": "tt0091121",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZGE4M2MzYzgtNzhkMy00NmRjLWFkMWUtMTRjMzlhNjMxNDZkXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_SX300.jpg"
            },
            {
                "Title": "Gladiator Cop",
                "Year": "1995",
                "imdbID": "tt0109905",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BN2M3MmZlYTYtZDQ4Yy00NWU1LTg3ZmMtNGUyMDEwMGJhMmM0XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg"
            },
            {
                "Title": "Gladiator Eroticvs: The Lesbian Warriors",
                "Year": "2001",
                "imdbID": "tt0256056",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQwMDA5MDY1MV5BMl5BanBnXkFtZTcwMDI2NDIyMQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Gladiator Days: Anatomy of a Prison Murder",
                "Year": "2002",
                "imdbID": "tt0359332",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MjUzMTQ1OF5BMl5BanBnXkFtZTYwNTk5Mzg5._V1_SX300.jpg"
            },
            {
                "Title": "Sign of the Gladiator",
                "Year": "1959",
                "imdbID": "tt0051985",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjFmMjAwY2ItOGUyNS00Mzc5LWFhYmUtYmI2MWQzYjkxNTY0XkEyXkFqcGdeQXVyMDM0NzcxMQ@@._V1_SX300.jpg"
            },
            {
                "Title": "See Ya Later Gladiator",
                "Year": "1968",
                "imdbID": "tt0063577",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZTA5Yzc4MjUtNmRkYy00NzYxLTg0ODItYTFmYmUxZWY4Yjc0XkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_SX300.jpg"
            },
            {
                "Title": "Gladiator of Rome",
                "Year": "1962",
                "imdbID": "tt0056026",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjc3OWEyNTYtNzE3Ni00ZGU5LThiOTItM2ZkN2MwZDQ1MjZkXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
            },
            {
                "Title": "The Gladiator",
                "Year": "1938",
                "imdbID": "tt0030186",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZjljNmE0ZDctYmU5Ni00Njk0LWI2YzctMWEyOTllNjJkNzcyXkEyXkFqcGdeQXVyNjA5MTAzODY@._V1_SX300.jpg"
            }
        ],
        "totalResults": "75",
        "Response": "True"
    }

    return (<>
        <div style={{ display: 'grid', gridTemplateColumns: "auto auto auto auto" }}>
            {
                films.Search.map(item => {
                    return <FilmBox film={item} />
                })
            }
        </div>

    </>)
}

export default Films