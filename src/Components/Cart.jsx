import React, { useContext, useState } from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { ReactComponent as CartIcon } from '../Assets/Icons/CartIcon.svg';
import { ReactComponent as CheckIcon } from '../Assets/Icons/CheckIcon.svg';
import { ReactComponent as CopyIcon } from '../Assets/Icons/CopyIcon.svg';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgj5gILIMhTkMRO5YaoxFu_UoVXqIIV_E",
  authDomain: "perifericos-de-pc.firebaseapp.com",
  projectId: "perifericos-de-pc",
  storageBucket: "perifericos-de-pc.appspot.com",
  messagingSenderId: "759580636862",
  appId: "1:759580636862:web:8426a7a49ef8c8980c90ef",
  measurementId: "G-VJBDPF75K5"
};

firebase.initializeApp(firebaseConfig);

export default function Cart() {
  const [cartState] = useContext(CartContext);
  const { items } = cartState;

  // calcular el precio total
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [showModal, setShowModal] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [orderId, setOrderId] = useState(null); // add state for order ID

  const handlePayment = () => {
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const price = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    firebase.firestore().collection('orders').add({
      name,
      lastname,
      phone,
      email,
      totalPrice: price,
      items,
      date: new Date()
    })
      .then((docRef) => { // store the order ID in the state
        console.log('Pago realizado exitosamente');
        setOrderId(docRef.id);
        setShowModal(true);
        setPaymentSuccessful(true);
      })
      .catch((error) => {
        console.error('Error al realizar el pago:', error);
      });
  };

  return (
    <Container>
      <h1 className='mt-3'>Carrito</h1>
      {
        items.length > 0
          ? <section>
            <h2 className='my-3'>Productos agregados:</h2>
            <Row xs={1} sm={2} md={4}>
              {items.map((item, index) => (
                <Col>
                  <Card key={index} className='card-cart mb-3'>
                    <Card.Body>
                      <Card.Title className='mx-3'>{item.title}</Card.Title>
                      <div className='card-cart_row'>
                        <Card.Text>$ {item.price}</Card.Text>
                        <div>
                          <CartIcon width='25' height='25' stroke="#00a650" />
                          <Card.Text>x {item.quantity}</Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className='cart-footer'>
              <h4 className='my-3'>Total a pagar: $ {totalPrice.toFixed(2)}</h4>
              <Button className='btn-primary ms-3' onClick={() => setShowModal(true)}>Completar compra</Button>
            </div>

            {paymentSuccessful ? (
              <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>{paymentSuccessful ? 'Comprobante' : 'Datos de la orden'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <CheckIcon />
                    <p className='text-primary'>Su pago se realizo correctamente</p>
                    <div className='d-flex justify-content-center align-items-center'>
                      <p className='text-primary me-1'>ID de la orden: {orderId}</p>
                      <CopyIcon className='mb-2'/>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            ) : (
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Datos de la orden</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Nombre:</label>
                      <input type="text" className="form-control mt-1" id="name" placeholder="Ingrese su nombre" required />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="lastname">Apellido:</label>
                      <input type="text" className="form-control mt-1" id="lastname" placeholder="Ingrese su apellido" required />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="phone">Teléfono:</label>
                      <input type="text" className="form-control mt-1" id="phone" placeholder="Ingrese su número de teléfono" required />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="email">Correo electrónico:</label>
                      <input type="email" className="form-control mt-1" id="email" placeholder="Ingrese su correo electrónico" required />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="repeat-email">Repetir correo electrónico:</label>
                      <input type="email" className="form-control mt-1" id="repeat-email" placeholder="Repita su correo electrónico" required />
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                  <Button variant="primary" onClick={handlePayment}>
                    Finalizar
                  </Button>
                </Modal.Footer>
              </Modal>
            )}

          </section>
          : <div className='empty-cart'>
            <div className='d-flex align-items-center'>
              <CartIcon width="33" height="33" stroke="#212529"/>
              <h2 className='ms-2'>No hay productos en el carrito.</h2>
            </div>
          </div>
      }
    </Container>
  );
}