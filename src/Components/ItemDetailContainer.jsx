import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    let { id } = useParams();

    return (
        <Container>
            <h1 className='mt-3'>Detalle del Producto {id}</h1>
        </Container>
    )
}