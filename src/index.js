import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import routes from './App.routes';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
