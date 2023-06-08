import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/NavBar/NavBar.jsx';
import { PagesOne } from './views/PagesOne/PagesOne.jsx';
import { PagesProduc } from './views/PagesProduc/PagesProduc.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { PagesDetails } from './views/PagesDetails/PagesDetails.jsx';
import { PagesCate } from './views/PagesCate/PagesCate';
import { GenericContext } from './components/GenericContext/GenericContext.jsx';
import { PagesCart } from './views/PagesCart/PagesCart';

function App() {
  return (
    <GenericContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={PagesOne} />
          {/* <Route path='/productos' Component={PagesProduc} /> */}
          <Route path='/productos/:idprod' Component={PagesDetails}/>
          <Route path='/category' Component={PagesCate}/>
          <Route path='/category/:idcate' Component={PagesProduc} />
          <Route path='/cart' Component={PagesCart}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </GenericContext>
  );
}

export default App;
