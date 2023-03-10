import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from './CartContext';
import { ReactComponent as ArrowIcon } from '../Assets/Icons/ArrowIcon.svg';
import { ReactComponent as FavIcon } from '../Assets/Icons/FavIcon.svg';
import { ReactComponent as RateIcon } from '../Assets/Icons/RateIcon.svg';
import { ReactComponent as CartIcon } from '../Assets/Icons/CartIcon.svg';
import { ReactComponent as ShipIcon } from '../Assets/Icons/ShipIcon.svg';

export default function ItemDetailContainer(props) {
    let { id } = useParams();
    const [cart, addCartItem] = useContext(CartContext);
    const product = props.items.find(item => item.id === id);
    const navigate = useNavigate();
    const [isFav, setIsFav] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const handleClick = () => {
        addCartItem(product, quantity);
    };

    const handleFavClick = () => {
        setIsFav(!isFav);
    };

    console.log(product)

    return (
        <Container>
            {
                product
                    ? <section>
                        <Container className='mt-3'>
                            <Row className='justify-content-between'>
                                <Col md={1} className='d-flex justify-content-start align-items-center'><ArrowIcon role="button" onClick={() => navigate(-1)} /></Col>
                                <Col className='d-flex flex-column justify-content-center'>
                                    <h1 className='mb-0'>{product.title}</h1>
                                    <h5 className='text-muted mt-2 mb-0 text-center'>{product.stock} disponibles</h5>
                                </Col>
                                <Col md={1} className='d-flex justify-content-end align-items-center'><FavIcon role="button" className={isFav ? "favorited" : ""} onClick={handleFavClick} /></Col>
                            </Row>
                        </Container>

                        <Container className='mt-4'>
                            <Row className='gx-5'>
                                <Col md={5} className='p-3 detail-col'>
                                    <img className={`detail-image_${product.categoryId} w-100`} src={product.image} alt="Imagen del producto" />
                                </Col>
                                <Col md={7} className='px-3 d-flex justify-content-center aling-items-center'>
                                    <Container className='detail-container_description px-3 py-4'>
                                        <Col><h3 className='text-center'>{product.description}</h3></Col>
                                        <Row>
                                            <Col><p className='detail-price mb-0'>$ {product.price}</p></Col>
                                            <Col className='d-flex align-items-center'>
                                                <RateIcon width="20" height="20"/>
                                                <div className='d-flex detail-opinions'>
                                                    <p className='ms-1 mb-0'>{product.rating}</p>
                                                    <p className='ms-1 mb-0'>({product.opinions} opiniones)</p>
                                                </div>
                                            </Col>
                                            <Col className='d-flex justify-content-center align-items-center details-text_quantity'><p className='mb-0'>Cantidad de productos</p></Col>
                                        </Row>
                                        <Row className='mt-2'>
                                            <Col className='d-flex aling-items-center'>
                                                {
                                                    product.freeShipment
                                                        ? <div className='detail-shipment_free'>
                                                            <ShipIcon width='30' height='30'/>
                                                            <p className='ms-1 mb-0'>Envio gratis</p>
                                                        </div>
                                                        : <div className='detail-shipment'>
                                                            <ShipIcon width='30' height='30'/>
                                                            <p className='ms-1 mb-0'>A coordinar</p>
                                                        </div>
                                                }
                                            </Col>
                                            <Col className='d-flex align-items-center detail-sells'>
                                                <CartIcon width='25' height='25' stroke="#6c757d"/>
                                                <p className='ms-1 mb-0 text-muted'>{product.qtySold} vendidos</p>
                                            </Col>
                                            <Col className='d-flex justify-content-between align-items-center detail-quantity'>
                                                <input type="number" min="1" max={product.stock} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />

                                                <Button className='p-1 ms-1' onClick={handleClick}>Agregar al carrito</Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    : <div className="load"></div>
            }
        </Container >
    )
}