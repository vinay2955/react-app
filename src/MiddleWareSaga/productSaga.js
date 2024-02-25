import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCTS,
} from "./actions";

const BASE_API_URL = "https://fakestoreapi.com";

function* addProductSaga(action) {
  try {
    const response = yield axios.post(
      `${BASE_API_URL}/products`,
      action.payload.product
    );
    yield put({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_PRODUCT_ERROR", payload: error });
  }
}

function* deleteProductSaga(action) {
  try {
    yield axios.delete(`${BASE_API_URL}/products/${action.payload.productId}`);
    const response = yield axios.get(`${BASE_API_URL}/products`);
    yield put({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_PRODUCT_ERROR", payload: error });
  }
}

function* updateProductSaga(action) {
  try {
    const response = yield axios.put(
      `${BASE_API_URL}/products/${action.payload.product.id}`,
      action.payload.product
    );
    yield put({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_PRODUCT_ERROR", payload: error });
  }
}

function* getProductsSaga() {
  try {
    const response = yield axios.get(`${BASE_API_URL}/products`);
    yield put({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "GET_PRODUCT_ERROR", payload: error });
  }
}

export default function* productSaga() {
  yield takeEvery(ADD_PRODUCT, addProductSaga);
  yield takeEvery(DELETE_PRODUCT, deleteProductSaga);
  yield takeEvery(UPDATE_PRODUCT, updateProductSaga);
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
}
