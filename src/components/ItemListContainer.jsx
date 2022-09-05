import React from 'react';
import { Component } from "react";

class ItemListContainer extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center text-decoration-underline font-monospace m-3'>
            <h1>{this.props.proyecto}</h1>
            </div>
        )
    }
}


export default ItemListContainer;