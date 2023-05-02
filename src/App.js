
import './App.scss';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { DetailsPage } from './Pages/DetailsPage';
import { Navbar } from './Pages/Navbar';
import { Footer } from './Pages/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<DetailsPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
