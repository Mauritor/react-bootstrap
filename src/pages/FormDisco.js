import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Col, Form, Button } from "react-bootstrap";
import NavBar from '../components/NavBar'

const FormDisco = () => {
    const { register, errors, handleSubmit } = useForm();
    const [messageError, setMessageError] = useState('');
    const createDisco = (data) => {
        try {
            console.log(data);
            //localStorage.setItem('DISCO', JSON.stringify(data))
        } catch (error) {
            console.log('error: ', error);
            const message = () => { setMessageError("Ouch! Ha ocurrido un error") }
            message()
        }
    }
    const onSubmit = (data, e) => {
        e.target.reset();
        createDisco(data);
    }
    return (
        <Fragment>
            <NavBar statusDisco={'fondoActivo'} />
            <Container className="mt-5 mb-5">
                <h2 className="text-primary separador">Cragar Disco Nuevo</h2>
                <span className="text-danger text-small d-block mb-2">
                    {messageError}
                </span>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Col sm={12} md={6}>
                            <Form.Control
                                type="text"
                                name="artist"
                                placeholder="Artist"
                                autoComplete="off"
                                className="mt-3"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'Artist es requerido'
                                    }
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.artist?.message}
                            </span>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Control
                                type="text"
                                name="album"
                                placeholder="Album"
                                autoComplete="off"
                                className="mt-3"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'Album es requerido'
                                    }
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.album?.message}
                            </span>
                        </Col>
                        <Col xs={6} md={6}>
                            <Form.Label>Year</Form.Label>
                            <Form.Control as="select" custom
                            name="year"
                            ref={register({
                                required: {
                                    value: false,
                                    message: 'Year es requerido'
                                }
                            })}>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                            </Form.Control>
                        </Col>
                        <Col xs={6} md={6}>
                            <Form.Label>Score</Form.Label>
                            <Form.Control as="select" custom
                                name="score"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'Score es requerido'
                                    }
                                })}
                            >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.score?.message}
                            </span>
                        </Col>
                        <Col sm={12} >
                            <Form.Control
                                type="text"
                                name="country"
                                placeholder="Country"
                                autoComplete="off"
                                className="mt-4"
                                ref={register({
                                    required: {
                                        value: false,
                                        message: 'Country es requerido'
                                    }
                                })}
                            />
                        </Col>
                        <Col sm={12}>
                            <Button
                                type="submit"
                                variant="outline-primary"
                                className="mt-3"
                                size="lg" block>
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        </Fragment>
    )
}

export default FormDisco