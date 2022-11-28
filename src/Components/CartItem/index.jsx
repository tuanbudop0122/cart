import React, { Component } from "react";

class CartItem extends Component {
  handleDeleteCartItem = () => {
    this.props.deleteCartItem(this.props.cart.product.id);
  };

  render() {
    const { image, price, name } = this.props.cart.product;
    const { quantity } = this.props.cart;
    return (
      <tr>
        <td>
          <img style={{ width: 200 }} src={image} />
        </td>
        <td style={{ fontSize: 25 }}>{name}</td>
        <td>{price}</td>
        <td>
          {quantity}
          <div className="btn-group">
            <button className="btn btn-info border-right">-</button>
            <button className="btn btn-info border-left">+</button>
          </div>
        </td>
        <td>{price * quantity}</td>
        <td>
          <button className="btn btn-info" onClick={this.handleDeleteCartItem}>
            x
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
