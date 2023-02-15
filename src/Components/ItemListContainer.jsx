import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item';
import data from '../products.json'

export default function ItemListContainer() {
    let { categoryId } = useParams();
    
    return (
        <section>
            {
                categoryId
                    ? <Container>
                        <h1 className='mt-3 title'>{categoryId} más vendidos</h1>

                        <Row>
                            {
                                data[categoryId].map((data, i) => <Col key={i}><Item data={data} category={categoryId} /></Col>)
                            }
                        </Row>
                    </Container>
                    : <Container>
                        <h1 className='mt-3 title'>Bienvenidos a Perifericos de PC</h1>
                    </Container>
            }
        </section>
    );
}