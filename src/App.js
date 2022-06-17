import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menubar from './Components/Shared/Menubar/Menubar';
import Login from './Components/Pages/Authentication/Login';
import Profile from './Components/Pages/Profile/Profile';
import Required from '../src/Components/Pages/Authentication/Required';
import AllNews from './Components/Pages/AllNews/AllNews';
import Registration from './Components/Pages/Authentication/Registration';
import NewsDetails from './Components/Pages/AllNews/NewsDetails';
import useNews from './Components/Hooks/useNews';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


function App() {
  const [dark, setDark] = useState(false);
  const [allnews] = useNews();
  return (
    <div className='' data-theme={dark ? "light" : "forest"}>
      <Menubar
      dark={dark}
      setDark={setDark}
      ></Menubar>
      <Routes> 
        <Route path='/news' element={<Required><AllNews
        allnews= {allnews}
        ></AllNews></Required>}>
        </Route>

        <Route path='/newsDetails/:name' element={
          <Required>
            <NewsDetails 
            allnews = {allnews}
            ></NewsDetails>
          </Required>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/register' element={<Registration></Registration>}>
        </Route>

        <Route path='/profile' element={<Required><Profile></Profile></Required>}>
        </Route>        
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
