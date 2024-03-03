import logo from './logo.svg';
import './App.css';
import Navbar from './container/navbar/Navbar';
import AddToCart from './container/addTocart/AddToCart';
import Homemain from './container/homMainSection/Homemain';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className="homeMain">
        <Homemain/>
      </div>
    </div>
  );
}

export default App;
