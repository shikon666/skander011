import React, {  useState } from 'react'

import { Card, Col, Row } from 'react-bootstrap';
import {Rating} from '@mui/material'
function Movie({search,skander,movies}) {

  console.log('movies',movies)
  
  return (
    <div>
            <Row xs={1} md={3} className="g-4">
             {movies?.filter(el => el.rate<=skander && el.title.toLowerCase().includes(search.toLowerCase())   ).map(el=>  (
              <Col>
                <Card>
                  <Card.Img height="450" variant="top" src={el.imgUrl} />
                  <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>
                      {el.description}
                     
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <Rating name="read-only" value={el.rate} readOnly />
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
    </div>
  )
}

export default Movie