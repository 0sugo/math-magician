import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Quote" element={<Quote />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
