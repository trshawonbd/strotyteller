import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firbase.init';
import Loading from '../../Shared/Loading/Loading';
import {  toast } from 'react-toastify';

const Profile = () => {
    const [updateProfile, updating] = useUpdateProfile(auth);  
    const [user, loading] = useAuthState(auth);
    const [selectedName, setSlectedName] = useState(user?.displayName)

    const handleUpdate = async(e) =>{
        e.preventDefault();
       const name =  await selectedName;
      await updateProfile({ displayName: name  })
        toast.success('Name updated');
    }

    if(loading || updating){
        <Loading></Loading>
    }
    return (
        <div className='h-screen'>
            <div className=' flex justify-center items-center'>
                <div className="card   w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={selectedName}
                            onChange={(e) => setSlectedName(e.target.value)} 
                            name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"
                            name='email'
                            value={user.email}
                            
                            placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">AccessToken</span>
                            </label>
                            <input type="text" value={localStorage.getItem('accesstoken')} className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleUpdate} className="btn btn-primary">Update Profile</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    );
};

export default Profile;