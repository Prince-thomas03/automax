
import './App.css';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Usage from './pages/Usage';
import Chart from './pages/Chart';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact';

function App() {
  return (

    <BrowserRouter>

<Header/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="setting" element={<Setting />}/>
        <Route path="usage" element={<Usage />}/>
        <Route path="Chart" element={<Chart />}/>
        <Route path="contact" element={<Contact />}/>
        </ Routes >
    </BrowserRouter>


  );
}

export default App;
