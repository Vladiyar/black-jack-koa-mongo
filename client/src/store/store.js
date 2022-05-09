import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import {createStore, applyMiddleware} from "redux";
import {reducers} from "../reducers/reducers";

const client = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json'
})


export const store = createStore(reducers, applyMiddleware(axiosMiddleware(client)));