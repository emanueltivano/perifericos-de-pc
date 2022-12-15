import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function Item(props) {
    let category = props.category.toLowerCase();

    return (
        <Card style={{ width: '18rem' }} key='1'>
            <Card.Body>
                <Card.Title>Producto {props.id}</Card.Title>
                <Card.Text>
                    Texto de ejemplo donde iria la descripcion del producto.
                </Card.Text>
                <Link to={`/${category}/item/${props.id}`}>
                    <Button variant="outline-primary">
                        Ver detalle
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}