import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ConfigRoutes from './ConfigRoutes';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <ConfigRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;