import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Col, Form, Button } from "react-bootstrap";
import NavBar from './NavBar'

const FormFirst = () => {
    const { register, errors, handleSubmit } = useForm();
    const [messageError, setMessageError] = useState('');
    const createDisco = async (data) => {
        try {
            console.log(data);
            localStorage.setItem('DISCO', JSON.stringify(data))
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
            <NavBar statusCreate={'fondoActivo'} />
            <Container className="mt-5 mb-5">
                <h2 className="text-primary separador">Create New Record</h2>
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
                                name="cover"
                                placeholder="Record"
                                className="mt-3"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'Cover es requerido'
                                    }
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.cover?.message}
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

export default FormFirst