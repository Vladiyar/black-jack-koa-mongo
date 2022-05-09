import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import {createStore, applyMiddleware} from "redux";
import {reducers} from "../reducers/reducers";
import {token} from "../reducers/selectors";


const client = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json'
})

const middlewareConfig = {
  interceptors: {
    request: [
      function ({getState}, req) {
        req.headers["Authorization"] = token(getState());
        return req;
      }
    ]
  }
}

export const store = createStore(reducers, applyMiddleware(axiosMiddleware(client, middlewareConfig)));