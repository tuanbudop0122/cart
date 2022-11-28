import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../../Components/Cart";
import ProductItem from "../../Components/ProductItem";
import { fetchProduct } from "../../Redux/Action/product";
class HomePage extends Component {
  state = {
    cart: [],
  };
  putToCart = (prod) => {
    const cloneCart = [...this.state.cart];
    const cartItem = {
      product: prod,
      quantity: 1,
    };
    const index = cloneCart.findIndex((item) => item.product.id === prod.id);

    if (index === -1) {
      cloneCart.push(cartItem);
    } else {
      cloneCart[index].quantity++;
    }

    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log("cart", this.state.cart);
      }
    );
  };
  deleteCartItem = (id) => {
    //clone this.state.cart
    const cloneCart = [...this.state.cart];
    //tìm vị trí qua id
    const index = cloneCart.findIndex((item) => item.product.id === id);
    // splice xóa vị trí
    if (index !== -1) {
      cloneCart.splice(index, 1);
    }
    this.setState({
      cart: cloneCart,
    });
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Cửa Hàng Điện Thoại</h1>
        <div className="container">
          <div className="row">
            {this.props.productList.map((item, index) => (
              <div className="col-3" key={index}>
                <ProductItem putToCart={this.putToCart} item={item} />
              </div>
            ))}
          </div>
        </div>
        <Cart cart={this.state.cart} deleteCartItem={this.deleteCartItem} />
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchProduct());
  }
}

const mapStateToProp = (state) => ({
  productList: state.ProductReducer.product,
});
export default connect(mapStateToProp)(HomePage);
