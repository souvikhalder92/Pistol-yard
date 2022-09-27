import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Gun from './components/Guns/Gun';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  const [count,setCount] = useState(0);
  const increaseCount= () =>
  {
    setCount(count+1);
  }
  return (
    <div className="App bg-gray-100">
          <Navbar count={count}></Navbar>
          <Gun increaseCount={increaseCount}></Gun>
          <Footer></Footer>
    </div>
  );
}

export default App;
