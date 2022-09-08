import './App.css';
import BrandPage from './BrandPage';
import ShowDataProvider from './GetData'
function App() {
  return (
    <div className="App">
      <ShowDataProvider>
      <BrandPage/>
      </ShowDataProvider>
    </div>
  );
}

export default App;
