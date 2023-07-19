import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Links from './components/Links';
import Catelouge from './components/Catelouge';
import Action from './components/Action';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Links/>
      <Catelouge/>
      <Action />
      <Footer/>
    </div>
  );
}

export default App;
