import App from './App.jsx';
import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "sonner";
import { configureStore } from "@reduxjs/toolkit";
import  { Provider } from "react-redux";
import productsReducer from "./features/productsSlice.js";

const store = configureStore({
  reducer: {
      products: productsReducer
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
        <Toaster richColors position="top-right" />
    </BrowserRouter>
  </StrictMode>
);