import React, { Component } from "react";
import CartItem from "../CartItem";

class Cart extends Component {
  //kiểm tra nếu giỏ hàng rỗng => <h4>không có sản phẩm </h4>
  //else => [CartItem,CartItem,CartItem]
  renderCartItem = () => {
    if (this.props.cart.length) {
      return this.props.cart.map((item, index) => {
        return (
          <CartItem
            cart={item}
            key={index}
            deleteCartItem={this.props.deleteCartItem}
          />
        );
      });
    }
    return (
      <td colSpan="100%" className="text-center font-weight-bold lead">
        không có sản phẩm
      </td>
    );
  };
  calcToTalAmount = () => {
    return this.props.cart.reduce((total, item) => {
      return item.product.price * item.quantity + total;
    }, 0);
  }; //hàm tính tổng toàn bộ số lượng trong mảng
  render() {
    return (
      <div>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog "
              style={{
                maxWidth: 1000,
                // backgroundImage:"url(${})"
              }}
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Giỏ Hàng</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Hình Ảnh</th>
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Tổng Cộng</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {this.renderCartItem()};
                      {this.props.cart.length > 0 && (
                        <tr>
                          <td />
                          <td />
                          <td />
                          <td
                            style={{ fontSize: 30 }}
                            className="font-weight-bold"
                          >
                            Tổng Tiền
                          </td>
                          <td
                            style={{ fontSize: 30 }}
                            className="font-weight-bold"
                          >
                            {this.calcToTalAmount()}$
                          </td>
                          <td>
                            <button
                              style={{ fontSize: 30 }}
                              className="btn btn-info"
                            >
                              Thanh Toán
                            </button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
