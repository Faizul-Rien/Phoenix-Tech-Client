import React from 'react';

const ManageAlluser = ({user}) => {
    return (
        <tr>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.price}</td>
            <td></td>
        </tr>
    );
};

export default ManageAlluser;