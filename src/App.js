import './App.css';
import Navbar  from './componenets/Navbar';
import Header from './componenets/Header';
import Company from './componenets/Company';
import RatingProjects from './componenets/RatingProjects';
import Work from './componenets/Work';
import Skills from './componenets/Skills';
import Pricing from './componenets/Pricing';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';

function App() {

  return (
  <div className="w3-top">
    <Navbar/>
    <Header/>
    <Company/>
    <RatingProjects/>
    <Work/>
     <div id="modal01" className="w3-modal w3-black" >
      <span className="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
      <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
        <img id="img01" className="w3-image"/>
        <p id="caption" className="w3-opacity w3-large"></p>
      </div>
    </div>
    <Skills/>
    <Pricing/>
    <Contact/>
    <Footer/>
  </div>

 );
}

export default App;
