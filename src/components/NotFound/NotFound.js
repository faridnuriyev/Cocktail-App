import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Alert style={{background: '#f7dafc'}} variant="danger">
       <Container className='d-flex flex-column align-items-center'>
       <h3 style={{color: 'gray'}}>Page is not found</h3>
        <Link to={'/'} style={{textDecoration:"none"}}>
            <h4 className='alert-link'>Back to home</h4>
        </Link>
       </Container>
    </Alert>
  )
}

export default NotFound