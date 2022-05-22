import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReviews from './Pages/Dashboard/AddReviews';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import PurchaseParts from './Pages/PurchaseParts/PurchaseParts';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="purchase" element={<RequireAuth>
          <PurchaseParts />
        </RequireAuth>} />


        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="portfolio" element={<MyPortfolio></MyPortfolio>} />

        <Route path="dashboard" element={<Dashboard></Dashboard>} >
        <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReviews></AddReviews>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="allorder" element={<ManageAllOrder></ManageAllOrder>}></Route>
          <Route path="admin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="manage" element={<ManageProduct></ManageProduct>}></Route>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
