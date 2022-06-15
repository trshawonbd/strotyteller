
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menubar from './Components/Shared/Menubar/Menubar';
import Login from './Components/Pages/Authentication/Login';
import Home from './Components/Pages/Home/Home';
import Profile from './Components/Pages/Profile/Profile';
import Required from '../src/Components/Pages/Authentication/Required';
import AllNews from './Components/Pages/AllNews/AllNews';


function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Required>
          <Home></Home>
        </Required>}>

        </Route>
        <Route path='/news' element={<Required><AllNews></AllNews></Required>}>

        </Route>
        <Route path='/login' element={<Login></Login>}>

        </Route>
        <Route path='/profile' element={<Required><Profile></Profile></Required>}>

        </Route>
        

      </Routes>
    </div>
  );
}

export default App;
