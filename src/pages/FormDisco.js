import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Col, Form, Button } from "react-bootstrap";
import NavBar from '../components/NavBar'

const años = [
    { año: 2021 },
    { año: 2022 },
    { año: 2023 }
]

const FormDisco = () => {
    const { register, errors, watch, handleSubmit } = useForm();
    const [messageError, setMessageError] = useState('');
    const [namePaises, setNamePaises] = useState([])
    const watchAll = watch();



    const getPaises = async () => {
        try {
            const res = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await res.json()
            setNamePaises(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPaises();
    }, [])

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
                                placeholder="* Artist"
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
                                placeholder="* Album"
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
                                <option value="2020">2020</option>
                                {años.map((item, i) => (
                                    <option key={i} value={item.año}>{item.año}</option>
                                ))}
                            </Form.Control>
                        </Col>
                        <Col xs={6} md={6} >
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                as="select" custom
                                name="country"
                                ref={register({
                                    required: {
                                        value: false,
                                        message: 'Country es requerido'
                                    }
                                })}
                            >
                                <option value={-1}>Country</option>
                                {
                                    namePaises.map((item, i) => (
                                        <option
                                            key={i}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </option>
                                    ))
                                }
                            </Form.Control>
                        </Col>
                        <Col sm={12} md={{span: 8, offset: 2}} className="mt-3">
                            <Form.Label>Score: {<span className="text-primary">{watchAll.score}</span>} </Form.Label>
                            <Form.Control
                                type="range"
                                step="1"
                                min="0"
                                max="100"
                                name="score"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'Score es requerido'
                                    }
                                })}
                            >
                            </Form.Control>

                            <span className="text-danger text-small d-block mb-2">
                                {errors?.score?.message}
                            </span>
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