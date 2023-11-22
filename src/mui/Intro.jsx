import { Alert, Button } from '@mui/material'
import React from 'react'


function Intro() {

  return (<>
    <Button disabled={true} variant='contained'>Hello Material UI Button</Button>
    <Alert severity='error'>Hello Alert Component</Alert>
  </>
  )
}

export default Intro