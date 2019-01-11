
import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    let {match} = this.props;
    console.log(match.params.slug);
    return (
      <h1>
        this is Prodcut page: {match.params.slug}
      </h1>
    );
  }
}