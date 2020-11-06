import React, { Fragment, useState, useEffect } from 'react';
import {Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from '../components/NavBar'

const Top2020 = () => {
    const [items, setItems] = useState([]);
    const getUsers = async () => {
        const url = 'http://jsonplaceholder.typicode.com/users'
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setItems(data);
    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <Fragment>
            <NavBar statusTop2020={'fondoActivo'} />
            
            <Container className="separador">
            <h1>Top-2020</h1>
                <Row className="d-flex justify-content-center">
                {items.map(item => (
                    <Col sm={12} md={4} xl={3} key={item.id}>
                        <Card style={{ marginBottom: '1rem' }}>
                            <Card.Img variant="top" src="https://www.andreasreiterer.at/wp-content/uploads/2018/01/UI-Library-react-bootstrap.jpg" />
                            <Card.Body>
                                <Card.Title>{item.username}</Card.Title>
                                <Card.Text>{item.phone}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                     ))}
                </Row>
            </Container>

        </Fragment>

    )
}
export default Top2020;

