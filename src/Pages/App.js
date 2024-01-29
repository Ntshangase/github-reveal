import { BrowserRouter } from 'react-router-dom';
import '../Styles/App.css';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter> 
      <Navbar />
    </BrowserRouter>
      
  );
}

export default App;
