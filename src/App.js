import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Quotes from './components/Quotes/Quotes';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Quotes />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
