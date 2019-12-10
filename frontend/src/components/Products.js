import React, { Component } from 'react';
import util from '../util';
import { Link } from 'react-router-dom';

import { useRouteMatch } from "react-router";
export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <img src={`/products/${product.sku}.jpg`} alt={product.title} />
                        <hr />                     
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-danger" onClick={(e)=>this.props.handleAddToCart(e, product)}>Reservar</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
