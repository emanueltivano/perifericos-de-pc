import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

function Help() {
    return (
        <section>
            <h1 className='mt-3'>Preguntas frecuentes</h1>
            <Container className='mt-3'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>¿Cuáles son las opciones de envío disponibles?</Accordion.Header>
                        <Accordion.Body>
                            Ofrecemos envío estándar y envío express para entregas nacionales e internacionales. Los detalles de precios y tiempos de entrega se pueden encontrar en la página de pago.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>¿Cómo puedo realizar un seguimiento de mi pedido?</Accordion.Header>
                        <Accordion.Body>
                            Una vez que se envía su pedido, recibirá un correo electrónico con un número de seguimiento. Puede usar este número para rastrear su pedido en nuestro sitio web o en el sitio web de la compañía de envío.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>¿Cuál es su política de devolución?</Accordion.Header>
                        <Accordion.Body>
                            Aceptamos devoluciones dentro de los 30 días posteriores a la compra para la mayoría de los productos. Los detalles completos se pueden encontrar en nuestra página de Política de devoluciones.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>¿Cómo puedo cambiar mi información de pago?</Accordion.Header>
                        <Accordion.Body>
                            Puede cambiar su información de pago en la sección "Métodos de pago" de su cuenta en nuestro sitio web. Si necesita ayuda adicional, no dude en contactarnos a través de nuestro centro de atención al cliente.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>¿Cómo puedo cancelar mi pedido?</Accordion.Header>
                        <Accordion.Body>
                            Si necesita cancelar su pedido, comuníquese con nosotros lo antes posible a través de nuestro centro de atención al cliente. Haremos todo lo posible para procesar su solicitud antes de que se envíe su pedido.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );
}

export default Help;