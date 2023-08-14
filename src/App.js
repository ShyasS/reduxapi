import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Header } from './components/Header';
import { ProductListing } from './components/ProductListing';
import {ProductDetail} from './components/ProductDetail';
import {NotFound} from './components/NotFound';
function App() { 
  return (
    <Router>
   <Header/>
   <Routes>
    <Route path='/' element={<ProductListing/>}/>
    <Route path="/products/:id" element = {<ProductDetail/>}/>
    <Route path = "*" element = {<NotFound/>}/>
   </Routes>
    </Router>
  );
}

export default App;
