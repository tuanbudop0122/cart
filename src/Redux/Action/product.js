import { createAction } from ".";
import { productService } from "../../Services";
import { FETCH_PRODUCT, FETCH_DETAIL } from "./type";

export const fetchProduct = () => {
  return (dispatch) => {
    productService
      .fetchProduct()
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT, res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const fetchDetail = (id) => {
  return (dispatch) => {
    productService
      .fetchDetail(id)
      .then((res) => {
        dispatch(createAction(FETCH_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
