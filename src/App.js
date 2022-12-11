import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
