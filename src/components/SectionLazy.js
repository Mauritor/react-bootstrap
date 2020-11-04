import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

const SectionLazy = () => {
    const [names, setNames] = useState([]);
    const getNames = () => {
        setNames([
            { id: 1, user: 'Pepe' },
            { id: 2, user: 'Ana' },
            { id: 3, user: 'Juan' },
            { id: 4, user: 'Carlos' },
            { id: 5, user: 'Fede' },
            { id: 6, user: 'Carla' },
            { id: 7, user: 'Nadia' },
            { id: 8, user: 'Brenda' }
        ])
    }
    useEffect(() => {
        getNames();
    }, [])
    return (
        <Fragment>
            <Container >
                <Row>
                    <Col sm={12} md={6}>
                        <LazyLoad offset={-200}>
                            <h1 className="text-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum, maxime eius optio odio aliquam alias distinctio expedita iure. Voluptas error exercitationem beatae reiciendis optio quisquam consequuntur ipsum! Sequi, nulla!</h1>
                        </LazyLoad>
                    </Col>
                    <Col sm={12} md={6}>
                        <LazyLoad height={200} offset={-250} >
                            <h1 className="text-danger">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum, maxime eius optio odio aliquam alias distinctio expedita iure. Voluptas error exercitationem beatae reiciendis optio quisquam consequuntur ipsum! Sequi, nulla!</h1>
                        </LazyLoad>
                    </Col>
                </Row>
            </Container>

            <Container >
                < Row>
                    {names.map(name => (
                        <Col sm={12} md={4} xl={3} key={name.id}>
                            <LazyLoad height={200} offset={-200 + name.id} >
                                <Card border="danger" className="separador">
                                    <Card.Header>{name.user}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Secondary Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on...
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </LazyLoad>
                        </Col>

                    ))}
                </Row>
            </Container>
        </Fragment >

    )
}
export default SectionLazy;