import './App.scss';
import './Responsive.scss'
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Info1 from './components/Info1';
import Info2 from './components/Info2';
import Location from './components/Location';
import Navbar from './components/Navbar';
import OurProducts from './components/OurProducts';
import Socials from './components/Socials';
import WhyWe from './components/WhyWe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <OurProducts/>
      <About/>
      <WhyWe/>
      <Info1/>
      <Info2/>
      <Socials/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
