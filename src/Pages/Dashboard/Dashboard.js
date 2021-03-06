import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-64 bg-blue-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                   {
                       !admin && <>
                        <li><Link to="/dashboard/order">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add a Review</Link></li>
                       </>
                   }
                    <li><Link to="/dashboard/">My Profile</Link></li>
                    
                    { admin && <>
                        <li><Link to="/dashboard/allorder">Manage All User</Link></li>
                    <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                    <li><Link to="/dashboard/admin">Make Admin</Link></li>
                    <li><Link to="/dashboard/manage">Manage All Product</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;