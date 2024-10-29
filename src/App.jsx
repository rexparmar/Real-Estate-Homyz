import Header from './components/hero/header/Header'; 
import Hero from './components/hero/Hero';
import Companies from './components/companies/Companies';
import Residencies from './components/residencies/Residencies';
import Value from './components/value/Value';
import Contact from './components/contact/Contact';
import GetStarted from './components/getstarted/GetStarted';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
      <Header></Header>
      <Hero></Hero>
      </div>
      <Companies></Companies>
      <Residencies></Residencies>
      <Value></Value>
      <Contact></Contact>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
  );
}

export default App;
