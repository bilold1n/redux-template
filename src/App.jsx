import React, { useEffect, useState } from "react";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./page/layout";
import Mystore from "./page/Mystore";
import Products from "./page/Products";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/mystore" element={<Mystore />} />
        <Route path="/" element={<Products />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
