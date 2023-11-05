import React from 'react'

function FilmBox({film}) {
  return (<>
    <div style={{borderStyle:'solid', margin:10, borderWidth:1, borderColor:'gray', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h3>Title: {film.Title}</h3>
        <h3>Year: {film.Year}</h3>
        <h3>ID: {film.imdbID}</h3>
        <h3>Type: {film.Type}</h3>
        <img src={film.Poster} alt="" />
    </div>
  </>
  )
}

export default FilmBox

