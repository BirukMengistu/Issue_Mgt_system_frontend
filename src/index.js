import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store  from './app/store';
import App from './App';
import './index.css';
import { fetchUsers } from "./features/user/usersSlices";
import { fetchCases } from "./features/case/casesSlices";
import {  fetchAddress } from "./features/user/addressSlices"

const container = document.getElementById('root');
const root = createRoot(container);
store.dispatch(fetchUsers())
store.dispatch(fetchCases())
store.dispatch(fetchAddress())
root.render(

  <React.StrictMode>
  <Provider store ={store}>
     <App />
  </Provider>
 
</React.StrictMode>
);

