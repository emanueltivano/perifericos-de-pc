import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { ReactComponent as RateIcon } from '../Assets/Icons/RateIcon.svg';

export default function Item(props) {
    return (
        <Link to={`/category/${props.category}/item/${props.data.id}`}>
            <Card className='my-3' style={{ width: '16rem' }} key='1'>
                <Card.Img variant="top" className={ `card-image_${props.category}` } src={props.data.image} />
                <Card.Body>
                    <Card.Title className='mx-3'>{props.data.title}</Card.Title>
                    <Card.Subtitle className="mt-2 text-muted">{props.data.qtySold} vendidos</Card.Subtitle>
                    <div className='d-flex justify-content-around mt-2'>
                        <p className='price'>$ {props.data.price}</p>
                        <div className='d-flex align-items-center'>
                            <RateIcon width="16" height="16"/>
                            <div className='d-flex align-items-baseline'>
                                <p className='ms-1 rate'>{props.data.rating}</p>
                                <p className='ms-1 opinions'>({props.data.opinions})</p>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    );
}