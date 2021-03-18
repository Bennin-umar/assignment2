
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from "./components/About";

function App() {
  return (
    <>
    <NavBar/>
  <main style={{backgroundImage:"url(./images/bg.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"cover"}}>
    <Contact/>
    <About />
  </main> 
  <Footer/>  
    </>
  );
}

export default App;
