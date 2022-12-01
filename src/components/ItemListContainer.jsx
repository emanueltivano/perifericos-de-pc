import React from 'react';

function ItemListContainer(props) {
    return (
        <section className='items-container'>
            <h1>{props.product} más vendidos</h1>
        </section>
    );
}

export default ItemListContainer;