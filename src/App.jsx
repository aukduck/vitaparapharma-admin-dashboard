import React from 'react';
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route,Routes, RouterProvider } from "react-router-dom"; // 
import RootLayuot from './layout/Rootlayout';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css'
import AddNewProduct from './pages/AddNewProduct';
import Error from './pages/Error';
import { AuthProvider } from './context/Auth';
import RequireAuth from './auth/RequireAuth';
import AllProducts from './pages/AllProducts';
import EditImage from './pages/EditImage';

const router = createBrowserRouter(

  createRoutesFromElements(

      <Route path="/" element={<RootLayuot />}>

        <Route path="home" element={
          <RequireAuth> <Home /> </RequireAuth> }/>

        <Route path="addnewproduct" element={
          <RequireAuth> <AddNewProduct /> </RequireAuth> }/>

        <Route path="allproducts" element={
          <RequireAuth> <AllProducts /> </RequireAuth> }/>

        <Route path="editimage" element={
          <RequireAuth> <EditImage /> </RequireAuth> }/>

        <Route index element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
  )
  );
  
  function App() {
    
    return (
      <>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
