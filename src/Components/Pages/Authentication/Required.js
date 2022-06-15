import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firbase.init';
import Loading from '../../Shared/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const Required = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading){
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
  
      return children;
    
};

export default Required;
