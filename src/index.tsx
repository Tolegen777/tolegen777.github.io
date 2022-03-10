import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// @ts-ignore
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// @ts-ignore
import store from "./redux/redux-store.ts";
// @ts-ignore
import Test from "./Test/Test.tsx";


ReactDOM.render(

<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>,
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
