import Nav from "./component/nav/Nav.jsx";
import Home from "./component/pages/home/home.jsx";
import Love from "./component/pages/love/Love.jsx";
import Cart from "./component/pages/cart/Cart.jsx";
import Pay from "./component/pages/cart/pay/Pay.jsx";
import User from "./component/pages/user/User.jsx";
import Mac from "./component/pages/home/category/pages/Mac/Mac.jsx";
import Iphone from "./component/pages/home/category/pages/Iphone/Iphone.jsx";
import Headphone from "./component/pages/home/category/pages/Headphone/Headphones.jsx";
import EarBuds from "./component/pages/home/category/pages/EarBuds/EarBuds.jsx";
import RProduct from "./component/pages/home/category/pages/Product/RProduct.jsx";
import Product from "./component/pages/home/category/pages/Product.jsx";
import Productr from "./component/pages/product/product.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Love" element={<Love />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/User" element={<User />} />
        <Route path="/Pay" element={<Pay />} />

        <Route path="/product" element={<Product />}>
          <Route path="All" element={<RProduct />} />
          <Route path="Mac" element={<Mac />} />
          <Route path="Iphone" element={<Iphone />} />
          <Route path="Headphone" element={<Headphone />} />
          <Route path="EarBuds" element={<EarBuds />} />
        </Route>
        <Route path="/product/:id" element={<Productr />} />
      </Routes>
    </BrowserRouter>
  );
}
