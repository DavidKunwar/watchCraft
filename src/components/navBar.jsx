import React, { useState } from "react"
import { Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function NavBar(){

    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate()

    function handleInput(event){
        //Capturing input
        setSearchText(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        //Navigate to search page with search text
        navigate(`/search/${searchText}` , {state: {searchText: searchText, pageNumber: 1}})
    }

    return (
        <Navbar key='lg' expand='lg' className='nav-bar' bg="transparent" variant="dark">
            <Container>
                <Navbar.Brand href="#">WATCHCRAFT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/discover/movies">Discover</Nav.Link>
                </Nav>
                <Form onSubmit={handleSubmit} className="d-flex">
                    <FormControl
                    value={searchText}
                    onChange={handleInput}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button type="submit" variant="danger">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar