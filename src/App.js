import './App.css';
import Home from './Pages/Home';
import Watch from './Watch';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Search from './Pages/Search';
import DataProvider from './contexts/Datacontext';
function App() {
  
  return (
     <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/view' element={<Watch/>}></Route>
          <Route exact path='/search' element={<Search/>}></Route>     
          </Routes>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
