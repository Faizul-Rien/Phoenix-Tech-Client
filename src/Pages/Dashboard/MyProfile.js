import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data);

        fetch('https://serene-scrubland-35114.herokuapp.com/profile', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result)
            register(null)
        })
    }
    return (
        <div>
            <h2 className='lg:ml-32 mt-5 text-2xl font-bold text-orange-400'>Add your profile information here</h2>
            <form className='lg:ml-32 mt-10 rounded-lg  bg-pink-100 lg:w-2/4'  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control lg:ml-20 w-full max-w-xs">
        <input
            type="email"
            disabled value={user?.email || ''} 
            placeholder="Your Email" 
            className="input input-bordered mb-3 mt-6 w-full max-w-xs"
            {...register("email")}
  />
    </div>
            <div className="form-control lg:ml-20 w-full max-w-xs">
        <input 
            type="text" 
            placeholder="Your Name" 
            className="input input-bordered mb-3 w-full max-w-xs"
            {...register("name")}
  />
    </div>
    <div className="form-control lg:ml-20 w-full max-w-xs">
        <input 
            type="text" 
            placeholder="Address" 
            className="input input-bordered mb-3 w-full max-w-xs"
            {...register("address")}
  />
    </div>

    <div className="form-control lg:ml-20 w-full max-w-xs">
        <input 
            type="text" 
            placeholder="Location" 
            className="input input-bordered mb-3 w-full max-w-xs"
            {...register("location")}
  />
    </div>
    <div className="form-control lg:ml-20 w-full mb-3 max-w-xs">
        <input 
            type="text" 
            placeholder="Phone Number" 
            className="input input-bordered w-full  max-w-xs"
            {...register("phone")}
  />
    </div>
    <input className='btn lg:ml-20 mt-3 mb-5 bg-green-400 text-white font-bold  w-full max-w-xs' type="submit" value='Add Profile' />
    </form>
    
        </div>
    );
};

export default MyProfile;