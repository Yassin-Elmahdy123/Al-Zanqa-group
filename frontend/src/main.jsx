import App from './App.jsx';
import React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "sonner";
import { createRoot } from 'react-dom/client'
import { AuthContextProvider } from './context/AuthContext';
import { configureStore } from "@reduxjs/toolkit";
import  { Provider } from "react-redux";
import productsReducer from "./features/productsSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer
  }
});


const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <BrowserRouter>
          <Toaster />
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </Provider>
  </StrictMode>
);
