import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/NavBar/NavBar.jsx';
import { PagesOne } from './views/PagesOne/PagesOne.jsx';
import { PagesProduc } from './views/PagesProduc/PagesProduc.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { PagesDetails } from './views/PagesDetails/PagesDetails.jsx';
import { PagesCate } from './views/PagesCate/PagesCate';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={PagesOne} />
        <Route path='/productos' Component={PagesProduc} />
        <Route path='/productos/:idprod' Component={PagesDetails}/>
        <Route path='/category' Component={PagesCate}/>
        <Route path='/category/:idcate' Component={PagesProduc} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
