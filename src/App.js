import React from 'react'
import TemplateContent from './template/TemplateContent'
import TemplateHeader from './template/TemplateHeader'
import TemplateNavbar from './template/TemplateNavbar'
import TemplateFooter from './template/TemplateFooter'



function App() {
  
  return (<>
    <TemplateNavbar/>
    <TemplateHeader/>  
    <TemplateContent/>
    <TemplateFooter/>

  </>

  )
}

export default App