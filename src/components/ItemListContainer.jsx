import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item';

export default function ItemListContainer() {
    let { categoryId } = useParams();
    
    let home = null;

    if (categoryId === undefined){
        home = true
    } else {
        home = false
    }

    return (
        <section>
            {
                home 
                ?   <Container>
                        <h1 className='mt-2 title'>Bienvenidos a Perifericos de PC</h1>
                    </Container> 
                :   <Container>
                        <h1 className='mt-2 mb-4 title'>{categoryId} más vendidos</h1>
                        
                        <Row>
                            <Col>
                                <Item category={categoryId} id={1} />
                            </Col>
                            <Col>
                                <Item category={categoryId} id={2} />
                            </Col>
                            <Col>
                                <Item category={categoryId} id={3} />
                            </Col>
                        </Row>
                    </Container>
            }
        </section>
    );
}