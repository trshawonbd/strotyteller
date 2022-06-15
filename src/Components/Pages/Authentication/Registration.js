import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firbase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Registration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();


    if (user) {
        console.log(user);
        navigate('/');

    }



    if (loading || updating) {
        return <Loading></Loading>
    }

    let SignInErrorMessage;

    if (error || updateError) {
        SignInErrorMessage = <p className='text-red-500'><small>{error?.message || updateError?.message}</small></p>
    }


    const onSubmit = async data => {
        const token = data.password;
        await localStorage.setItem('accesstoken', token)
        await createUserWithEmailAndPassword(data.email, data.password);

        await updateProfile({ displayName: data.name });
        navigate('/');



    }
    return (
        <div className='flex h-content justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Authentication Key</span>
                            </label>
                            <input type="password"
                                placeholder="Your authentication key"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    }
                                })}
                            />
                            <label className="label">
                                <span className="label-text">You will get authentication key from <a className='font-bold text-warning' href="https://newsapi.org/register" target="_blank">Here</a></span>
                            </label>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {SignInErrorMessage}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Sign Up' />
                    </form>
                    <p><small>Already Have an Account? <Link className='text-primary font-bold' to='/login'>Login</Link></small></p>

                </div>
            </div>
        </div>
    );
};

export default Registration;