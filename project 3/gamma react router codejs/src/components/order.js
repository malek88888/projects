import React, { Component } from 'react'

export default class Order extends Component {
    render() {
        const { orderId,itemName, price, numOfItems, color } = this.props.orders
        return (
            <div className="orders" >
                <p> Order (Id= {this.props.id}---{orderId})</p>
     &nbsp; &nbsp;
                <span>Item name = {itemName}</span>
    &nbsp; &nbsp;
                <span>Price = {price} &cent;	</span>
    &nbsp; &nbsp;
                <span>Quantity = {numOfItems}items </span>
        &nbsp; &nbsp;
                <span>Color = {color} . </span>
                <input type="checkbox" />

            </div>
        )
    }
}