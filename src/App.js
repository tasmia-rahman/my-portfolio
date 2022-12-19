import './App.css';
import { Toaster } from 'react-hot-toast';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
