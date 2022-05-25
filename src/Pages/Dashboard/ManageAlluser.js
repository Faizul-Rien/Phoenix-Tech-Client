import React from 'react';

const ManageAlluser = ({user}) => {
    return (
        <tr>
            <td>{user.email}</td>
            <td>{user.role}</td>
        </tr>
    );
};

export default ManageAlluser;