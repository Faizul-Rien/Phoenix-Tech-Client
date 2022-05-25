import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAlluser from './ManageAlluser';


const ManageAllOrder = () => {
    const { data: users, isLoading,refetch} = useQuery('users', () => fetch('http://localhost:5000/user')
    .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl my-5 lg:ml-28 font-bold text-orange-400">All Users</h2>
            <div class="overflow-x-auto">
                <table class="table lg:ml-28 lg:w-7/12">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=><ManageAlluser
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></ManageAlluser>)
                       }
                    </tbody>
                </table>
            </div>
          
        </div>
    );
};

export default ManageAllOrder;