import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import {BrowserRouter} from "react-router-dom";


import App from './App';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
   <BrowserRouter>
   <Provider store={store}>
      <App />
   </Provider>
   </BrowserRouter>, 
    document.getElementById('root')
   
);