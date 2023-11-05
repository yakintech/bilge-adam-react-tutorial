import React from 'react'

function ArraySample() {

    let countries = ["Türkiye", "Almanya", "Japonya", "İngiltere", "İran", "Rusya", "Hindistan", "İsveç", "İsviçre"]
    

  return (<>
    
    <ul>
        {
            countries.map(item => <li>{item}</li>)
        }
    </ul>
  
  </>
  )
}

export default ArraySample