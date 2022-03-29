import { ActionTypes } from "../constants/action-types";
import fakestoreapi from "../../apis/fakeStoreApi";

export const fetchProducts = () => {
  return async function (dispatch, getState) {
    const response = await fakestoreapi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchProduct = (id) => {
  return async function (dispatch, getState) {
    const response = await fakestoreapi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: response.data });
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    payload: products,
  };
};
