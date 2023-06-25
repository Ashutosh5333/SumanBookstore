import MainRoutes from './AllRoutes/MainRoutes';
import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  // const [searchbook , SetserachBooks] = useState()

  return (
    <div className="App">
       <Navbar/>
       <MainRoutes/>
    </div>
  );
}

export default App;
