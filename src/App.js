import logo from './logo.svg';
import './App.css';
import Portada from './components/portada';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/about';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Portada />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </Layout>  
  );
}

export default App;
