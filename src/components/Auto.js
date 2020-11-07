import React, { Fragment, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

const categorias = [
    {
        nombre: "Audio y Video",
        articulos: ['Monitoe Led', 'Parlante', 'Smart-TV 65 4k']
    },
    {
        nombre: "Ferreterias",
        articulos: ['Martillo pequeño', 'Taladro', 'Serrucho']
    }
]
console.log(categorias);
const Auto = () => {
    const [idArticulos, setIdArticulos] = useState(-1)

    const handleCargarArticulo = (e) => {
        const opcion = e.target.value;
        console.log(opcion);
        setIdArticulos(opcion);
    }


    return (
        <Fragment>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <h3>Categorias</h3>
                        <select 
                        name="categorias" 
                        id="selCategorias"
                        onClick={handleCargarArticulo}
                        >
                            <option value={-1}></option>
                            {
                                categorias.map((item, i) => (
                                    <option key={i} value={i}>{item.nombre}</option>
                                ))
                            }
                        </select>
                    </Col>
                    <Col sm={12} md={6}>
                        <h3>Articulos</h3>
                        <select 
                        name="articulos" 
                        id="selarticulo"
                        >
                            {
                                idArticulos > -1 &&(
                                    categorias[idArticulos].articulos.map((item, i) => (
                                    <option key={i} value="">{item}</option>
                                    ))
                                )
                            }
                        </select>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )


}

export default Auto