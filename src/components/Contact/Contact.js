import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

function Contact() {

  useEffect(() => {
    document.title = "Contact"
  })

  return (
    <Container className='text-center my-3'>
        Call us for cool party drinks: <br /> +123 456 78 90
    </Container>
  )
}

export default Contact