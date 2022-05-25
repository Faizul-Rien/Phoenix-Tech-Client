import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L37HVJESUwAMyqvuzAMWWHSEALRm6FNxuEWUuBjSU5N3RnoGuekDY9zThEDT3H9h0eUR27RM2H5O8R8oUaAtwG300ZeXkVBAI');
    const {id} = useParams()
    const url = `http://localhost:5000/purchase/${id}`;

    const { data : purchase, isLoading } = useQuery(['purchase', id], () => fetch(url)
    .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-black ">Hello <span className='text-orange-500 font-bold'>{purchase.userName}</span></p>
                    <h2 class="text-black">Pay for Your Order ({purchase.parts})</h2>
                    <p>Please Pay : <span className='text-green-500 font-bold'>${purchase.price}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm purchase={purchase}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;