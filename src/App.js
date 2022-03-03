import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Home />
     <Categories />
     <Products />
    </div>
  );
}

export default App;
