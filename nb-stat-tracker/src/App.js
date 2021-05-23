// deps imports
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// component imports
import Navbar from './components/Navbar';
import Contract  from './components/Contract';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contract />
    </div>
  );
}

export default App;
