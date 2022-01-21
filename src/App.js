import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsLoad } from "./redux/actions";
import Spin from "./Spin";
import { ItemCards, Filter, Header, Order, Cart, Product } from "./components";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  useEffect(() => {
    dispatch(productsLoad());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemCards products={products} />} />
          <Route path="product/:id" element={<Product products={products} />} />
          <Route path="order/:id" element={<Order products={products} />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

const Layout = () => {
  return (
    <div className="App">
      <div className="white-plate">
        <div className="container">
          <Header />
          <Spin />
          <main className="body">
            <Filter />
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
