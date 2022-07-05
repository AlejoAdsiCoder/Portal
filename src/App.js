import logo from './logo.svg';
import './App.css';
import Portada from './components/portada';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutMe } from './components/about';
import { Layout } from './components/Layout';
import { Container } from './components/Container';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      
        <Routes>
          <Route exact path='/' element={<Portada />} />
          <Route path='/about' element={<AboutMe />} />
        </Routes>
      
    </Layout>  
    </BrowserRouter>
  );
}

export default App;
