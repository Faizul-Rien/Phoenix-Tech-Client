import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Admin from './Admin';


const MakeAdmin = () => {
    const { data: users, isLoading,refetch} = useQuery('users', () => fetch('http://localhost:5000/user')
    .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-bold text-purple-600 m-8'>ALL USER</h2>
            <div class="overflow-x-auto">
                <table class="table w-3/4 ml-28">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>Create</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user)=><Admin
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></Admin>)
                       }
                    </tbody>
                </table>
            </div>
          
        </div>
    );
};

export default MakeAdmin;