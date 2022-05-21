import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PurchaseParts from './Pages/PurchaseParts/PurchaseParts';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="purchase" element={<PurchaseParts />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
