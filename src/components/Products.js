import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Product from './Product';

export default class Products extends Component {
  render() {
    let products = [
      {
        id: 1,
        slug: 'iphone',
        name: 'iphone x',
        price: '35000000'
      },
      {
        id: 2,
        slug: 'samsung',
        name: 'Galaxy s9',
        price: '12000000'
      },
      {
        id: 3,
        slug: 'oppo',
        name: 'oppo f9',
        price: '10000000'
      }
    ];

    let {match} = this.props;
    let url = match.url;
    // console.log(match.url);

    let productsHTML = products.map((product, index) => {
      return (
        <li key={index} className="list-group-item">
          <NavLink to={`${url}/${product.slug}`} >
            {product.id} - {product.name}, - {product.price}
          </NavLink>
        </li>
      );
    });

    let {location} = this.props;
    console.log(location);

    return (
      <div className="container">
        <h1>Products list</h1>
        
        <div className="row">
          <ul className="list-group">
            {productsHTML}
          </ul>
        </div>

        
        <div className="row">
          <Route path="/products/:slug" component={Product}/>
        </div>
        
      </div>
      
    );
  }
}