import './scss/main.scss';
import React from 'react';
import {createRoot} from "react-dom/client";
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./store/store"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Game from "./components/routes/Game";
import Login from "./components/routes/Login";

const app = document.getElementById('root');
const root = createRoot(app);

root.render(
  <Provider store={store}>
      <Router>
          <Routes>
              <Route path="/" element={ <App/>}/>
              <Route path="game" element={<Game/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="*" element={<Login/>}/>
          </Routes>
      </Router>
  </Provider>
)