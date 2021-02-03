import './App.css';
import Etape1 from './components/Etape-1';
import Etape2 from './components/Etape-2';
import Etape3 from './components/Etape-3';
import Footer from './components/Footer';
import Header from './components/Header';
import Lapurete from './components/Lapurete';
import LeDomane from './components/LeDomane';

function App() {
  return (
    <div className="wrapper-landing">
     <div className="container">
        <Header/>
        <Lapurete/>
        <Etape1/>
        <Etape2/>
        <LeDomane/>
        <Etape3/>
        <Footer/>
     </div>
    </div>
  );
}

export default App;
