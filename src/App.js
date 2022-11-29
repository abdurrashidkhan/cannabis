import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Page/Home/Home';
import Login from './Components/Page/Auth/Login/Login';
import SignUp from './Components/Page/Auth/CreateAccout/NewAccount';
import IndexMin from './Components/Page/IndexMin';
import Overview from './Components/Page/Overview/Overview';
import Navbar from './Components/Page/Navbar/Navbar';
import Setting from './Components/Page/Setting/Setting';
import Dashboard from './Components/Page/Dashboard/Dashboard';
import NotFound from './Components/Page/404/NotFound';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<IndexMin />} >
          <Route index element={
            <Overview></Overview>
          }></Route>
          <Route path='/setting' element={
          <Setting></Setting>
        }></Route>
        <Route path='/dashboard' element={
          <Dashboard></Dashboard>
        }></Route>

        </Route>
        <Route path='/login' element={
          <Login></Login>
        }></Route>
        <Route path='/signup' element={
          <SignUp></SignUp>
        }></Route>
        <Route path='*' element={
          <NotFound></NotFound>
        }></Route>
      </Routes></>
  );
}

export default App;
