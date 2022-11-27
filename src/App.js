import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Page/Home/Home';
import Login from './Components/Page/Auth/Login/Login';
import SignUp from './Components/Page/Auth/CreateAccout/NewAccount';
import IndexMin from './Components/Page/IndexMin';
import Overview from './Components/Page/Overview/Overview';
import Navbar from './Components/Page/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<IndexMin />} >
          <Route index element={
            <Overview></Overview>
          }></Route>
          {/* <Route path='add-news' element={
          <AddNews></AddNews>
        }></Route>
        <Route path='manage-news' element={
          <ManageNews></ManageNews>
        }></Route> */}

        </Route>
        <Route path='/login' element={
          <Login></Login>
        }></Route>
        <Route path='/signup' element={
          <SignUp></SignUp>
        }></Route>
      </Routes></>
  );
}

export default App;
