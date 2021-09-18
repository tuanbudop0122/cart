import Axios from "axios";
class ProductService {
  fetchProduct() {
    return Axios({
      method: "GET",
      url: "https://5f1d4b9f39d95a0016953dc8.mockapi.io/api/PRODUCTS/",
    });
  }
  fetchDetail(id) {
    return Axios({
      method: "GET",
      url: "https://5f1d4b9f39d95a0016953dc8.mockapi.io/api/PRODUCTS/" + id,
    });
  }
}
export default ProductService;
