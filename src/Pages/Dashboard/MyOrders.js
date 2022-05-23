import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { Link, useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [orders, setorders] = useState([]);
    const [user] = useAuthState(auth);
    // const navigate = useNavigate()

    useEffect(() => {
            if(user){
                fetch(`http://localhost:5000/purchase?user=${user.email}`)
                .then(res => res.json())
                .then(data => setorders(data));
            }
    }, [user])
    return (
        <div>
            <h2 className='text-3xl text-center font-bold text-purple-600 m-8'>MY ORDERS</h2>
            <div class="overflow-x-auto">
                <table class="table w-3/4 ml-28 bg-">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Parts Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr key={o._id}>
                                <th>{index + 1}</th>
                                <td>{o.userName}</td>
                                <td>{o.user}</td>
                                <td>{o.parts}</td>
                                <td>{o.price}</td>
                                {/* <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;