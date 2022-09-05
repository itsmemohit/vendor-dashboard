import Sidebar from "../sidebar/vendorSidebar";
import VendorTopbar from "../../layout/topbar/Topbar";
import "./App.css";
import VendorHome from "../../pages/home/Home";
import { Routes, Route } from "react-router-dom";
import VendorUserList from "../../pages/userList/UserList";
import VendorUser from "../../pages/user/User";
import VendorNewUser from "../../pages/newUser/NewUser";
import VendorProductList from "../../pages/productList/ProductList";
import VendorProduct from "../../pages/product/Product";
import VendorNewProduct from "../../pages/newProduct/NewProduct";
import Transactions from "../widgetLg/WidgetLg";
import VendorCards from "../cards/cards";
import VendorGallery from '../../pages/gallery/gallery';
import HOC from '../../layout/HOC';

function VendorApp() {
    const navigate = useNavigate();
    return (
        <Routes>
            <VendorTopbar />
            <div className="container">
                <Sidebar />
                <Route exact path="/">
                    <VendorHome />
                </Route>
                <Route path="/vendorusers">
                    <VendorUserList />
                </Route>
                <Route path="/vendoruser/:userId">
                    <VendorUser />
                </Route>
                <Route path="/vendornewUser">
                    <VendorNewUser />
                </Route>
                <Route path="/vendorproducts">
                    <VendorProductList />
                </Route>
                <Route path="/vendorproduct/:productId">
                    <VendorProduct />
                </Route>
                <Route path="/vendornewproduct">
                    <VendorNewProduct />
                </Route>
                <Route path="/vendorTransactions">
                    <Transactions />
                </Route>
                <Route path="/vendorUploadServices">
                    <VendorTransactions />
                </Route>
                <Route path="/vendorrRequest">
                    <VendorCards />
                </Route>
                <Route path="/vendortotalServices">
                    <VendorCards />
                </Route>
                <Route path="/vendortestimonials">
                    <VendorCards />
                </Route>
                <Route path="/vendorgallery">
                    <VendorGallery />
                </Route>
                <Route path="/vendorcomplaint">
                    <VendorCards />
                </Route>
                <Route path="/vendorManageProfile">
                    <VendorUser />
                </Route>
                <Route path="/vendorSetting">
                    <VendorUser />
                </Route>
            </div>
        </Routes>
    );
}