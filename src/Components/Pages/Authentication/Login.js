import React from 'react';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firbase.init';
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      let navigate = useNavigate();
      let location = useLocation();
    
      
      

      
      if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }


      if (loading){
          return <Loading></Loading>
      }

      let SignInErrorMessage;

      if(error){
        SignInErrorMessage = <p className='text-red-500'><small>{error?.message}</small></p>
      }



    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
        
    }
    return (
        <div>
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form  onSubmit={handleSubmit(onSubmit)} >

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
                                <span className="label-text">Email</span>
                            </label>
                            <input type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must have 6 Characters or long'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                         {SignInErrorMessage}
                        <input className='btn w-full max-w-xs btn-primary  ' type="submit" value='Login' />
                    </form>
                    <p><small>New to Plumber? <Link className='text-primary font-bold' to='/register'>Create New Account</Link></small></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;