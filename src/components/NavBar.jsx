
import { Rating } from '@mui/material';
import { useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample({setSearch,setSkander,movies,setMovies}) {

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const[img,setImg]=useState('')
const[tit,setTit]=useState('')
const[des,setDes]=useState('')
const[rat,setRat]=useState(0)


const addMovie=()=>{
  setMovies([...movies,   {title : tit , description : des , imgUrl:img , rate : rat }])
  handleClose()
}
 console.log(movies)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <div>
          {/*modale*/}
          <Button variant="primary" onClick={handleShow}>
ADD Movie      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3">
        <Form.Label>title</Form.Label>
        <Form.Control placeholder="Enter title"  onChange={e=>setTit(e.target.value)} />

        <Form.Label>image</Form.Label>
        <Form.Control placeholder="Enter title" onChange={e=>setImg(e.target.value)} />

        <Form.Label>description</Form.Label>
        <Form.Control placeholder="Enter title"  onChange={e=>setDes(e.target.value)} />

        <Form.Label>rating</Form.Label>
        <Form.Control placeholder="Enter title" type='number' min="1" max="5"  onChange={e=>setRat(e.target.value)}/>

        
      </Form.Group>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          
          
          
          
          
          </div>
          <Form className="d-flex">

          <Rating
         onChange={(e)=> setSkander(e.target.value)}
        />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> setSearch(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;