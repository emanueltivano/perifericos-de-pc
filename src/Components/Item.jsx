import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function Item(props) {
    return (
        <Link to={`/${props.category}/item/${props.data.id}`}>
            <Card className='my-3' style={{ width: '16rem' }} key='1'>
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <div className='d-flex justify-content-around mt-2'>
                        <p className='price'>$ {props.data.price}</p>
                        <div className='d-flex align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0d6efd" fill="#0d6efd" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                            <div className='d-flex align-items-baseline'>
                                <p className='ms-1 rate'>{props.data.rate}</p>
                                <p className='ms-2 opinions'>({props.data.opinions})</p>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    );
}