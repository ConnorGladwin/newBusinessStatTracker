// deps imports
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// component imports
import Navbar from './components/Navbar';
import Main  from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
