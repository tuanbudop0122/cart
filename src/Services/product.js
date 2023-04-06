import Axios from "axios";
class ProductService {
  fetchProduct() {
    return Axios({
      method: "GET",
      url: "https://5f2c1785ffc88500167b8a4b.mockapi.io/api/product/product",
    });
  }
  fetchDetail(id) {
    return Axios({
      method: "GET",
      url: "https://5f2c1785ffc88500167b8a4b.mockapi.io/api/product/product/" + id,
    });
  }
}
export default ProductService;
