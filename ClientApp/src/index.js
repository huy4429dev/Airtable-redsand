import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import * as serviceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configStore from './redux/configStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
