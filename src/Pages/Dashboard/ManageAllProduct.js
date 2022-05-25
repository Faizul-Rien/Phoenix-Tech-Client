import React from 'react';

const ManageAllProduct = ({user}) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.price}</td>
            <td>{user.minquantity}</td>
            <td>{user.avaquantity}</td>
        </tr>
    );
};

export default ManageAllProduct;