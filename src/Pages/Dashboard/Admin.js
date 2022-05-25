import React from 'react';
import { toast } from 'react-toastify';

const Admin = ({user, refetch}) => {
    const {email , role} = user;
    const makeAdmin = () => {
        fetch(`https://serene-scrubland-35114.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            body : JSON.stringify()
    })
        .then(res=> res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully made an admin`);
            }

        })
          
    }
    return (
        <tr >
         <th>@</th>
        <td>{email}</td>
        <td>{role!== 'admin' && <button onClick={makeAdmin} class="btn bg-green-600 btn-xs">Make Admin</button>}</td>
        <td><button class="btn bg-red-600 btn-xs">Remove User</button></td>
    </tr>
    );
};

export default Admin;