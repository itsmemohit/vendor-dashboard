import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Layout/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Transactions from "./components/widgetLg/WidgetLg";
import Cards from "./components/cards/cards";
import Gallery from './pages/gallery/gallery';

function App() {
  return (
    <>
      <Topbar />

      <Sidebar />
      <Routes className="container">
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/UploadServices" element={<Transactions />} />
        <Route path="/vendorrRequest" element={<Cards />} />
        <Route path="/totalServices" element={<Cards />} />
        <Route path="/testimonials" element={<Cards />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/complaint" element={<Cards />} />
        <Route path="/ManageProfile" element={<User />} />
        <Route path="/Setting" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
