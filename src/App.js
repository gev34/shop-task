import './App.css';
import BrandPage from "./Components/BrandPage"
import { ShopDataProvider } from './Components/GetData';

function App() {
  return (
    <div className="App">
      <ShopDataProvider>
      <BrandPage/>
      </ShopDataProvider>
    </div>
  );
}

export default App;
