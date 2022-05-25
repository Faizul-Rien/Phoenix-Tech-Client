import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAllProduct from './ManageAllProduct';


const ManageProduct = () => {
    const { data: users, isLoading,refetch} = useQuery('users', () => fetch('http://localhost:5000/part')
    .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl my-5 lg:ml-28 font-bold text-orange-400">All Products</h2>
            <div class="overflow-x-auto">
                <table class="table lg:ml-20 lg:w-10/12">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user)=><ManageAllProduct
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></ManageAllProduct>)
                       }
                    </tbody>
                </table>
            </div>
          
        </div>
    );
};

export default ManageProduct;