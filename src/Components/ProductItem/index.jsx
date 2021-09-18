import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  handlePutToCart = () => {
    this.props.putToCart(this.props.item);
  };
  render() {
    const { image, name, price } = this.props.item;
    return (
      <div>
        <div className="card p-2 m-2">
          <img src={image} alt="" />
          <p className="lead">{name}</p>
          <p className="lead">{price}</p>
          <Link
            to={`/detail/${this.props.item.id}`}
            className=" p-2 m-2 btn btn-primary"
          >
            Xem chi tiết
          </Link>
          <button
            onClick={this.handlePutToCart}
            className=" p-2 m-2 btn btn-success"
          >
            Giỏ hàng <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
