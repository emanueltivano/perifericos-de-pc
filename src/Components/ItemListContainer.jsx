import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item';

export default function ItemListContainer(props) {
    const { categoryId } = useParams();
    const filteredItems = categoryId
        ? props.items.filter(item => item.categoryId === categoryId)
        : props.items || [];

    const header = categoryId ? `${categoryId} más vendidos` : 'Bienvenidos a Periféricos de PC';
    const subheader = categoryId ? null : <h2 className='my-4 ps-1'>¡Mira todos nuestros productos!</h2>;

    return (
        <section>
            <Container>
                <h1 className='mt-3 title'>{header}</h1>
                {subheader}
                <Row xs={1} sm={2} md={4}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <Col key={index}><Item data={item} category={categoryId} /></Col>
                        ))
                    ) : (
                        <div className="load"></div>
                    )}
                </Row>
            </Container>
        </section>
    );
};