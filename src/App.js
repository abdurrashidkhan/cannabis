import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Page/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
