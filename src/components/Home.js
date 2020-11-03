import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import NavBar from './NavBar'

const Home = () => {
    return (
        <Fragment>
            <NavBar statusHome={'fondoActivo'} />
            <div className="container separador">
                <div className="row d-flex">
                    <div className="col-sm-12 col-md-6">
                        <h1>Home</h1>
                        <Card style={{ marginBotom: '18rem' }}>
                            <Card.Img variant="top" src="https://www.andreasreiterer.at/wp-content/uploads/2018/01/UI-Library-react-bootstrap.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Home;

