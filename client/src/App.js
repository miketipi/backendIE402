import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <Footer />
    </div>
  );
}

export default App;
