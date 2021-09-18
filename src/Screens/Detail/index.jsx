import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetail } from "../../Redux/Action/product";
class DetailPage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.product.image} alt="" />
        <p className="lead">Tên Điện Thoại:{this.props.product.name}</p>
        <p className="lead">Giá: {this.props.product.price} đ</p>
        <p className="lead">Mô Tả: {this.props.product.description}</p>
        <p className="lead">Đánh Giá:{this.props.product.rating}</p>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchDetail(this.props.match.params.id));
  }
}
const mapStateToProps = (state) => ({
  product: state.ProductReducer.detail || {
    rating: "",
    name: "",
    image: "",
  },
});

export default connect(mapStateToProps)(DetailPage);
