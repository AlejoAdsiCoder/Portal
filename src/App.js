import logo from './logo.svg';
import './App.css';
import Portada from './components/portada';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutMe } from './components/about';
import { Projects } from './components/projects';
import { Layout } from './components/Layout';
import { ProjectSelected } from './pages/project';
import { Container } from './components/Container';
import ContactPage from './pages/contact';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      
        <Routes>
          <Route exact path='/' element={<Portada />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/project/:id" element={<ProjectSelected />} exact />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      
    </Layout>  
    </BrowserRouter>
  );
}

export default App;
