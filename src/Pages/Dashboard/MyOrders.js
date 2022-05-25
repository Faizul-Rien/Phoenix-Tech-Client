import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const [orders, setorders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
            if(user){
                fetch(`https://serene-scrubland-35114.herokuapp.com/purchase?user=${user.email}`)
                .then(res => res.json())
                .then(data => setorders(data));
            }
    }, [user])

    
    return (
        <div>
            <h2 className='text-3xl text-center font-bold text-purple-600 lg:m-8'>MY ORDERS</h2>
            <div class="overflow-x-auto">
                <table class="table lg:w-3/4 lg:ml-28 ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Parts Name</th>
                            <th>Price/unit</th>
                            <th>Payment</th>
                            <th>Remove</th>
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
                                <td>
                                    {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(o.price && o.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        {/* <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p> */}
                                    </div>}
                                </td>
                                <td>{(o.price && !o.paid) && <button className='btn btn-xs bg-red-600'>Remove</button>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;