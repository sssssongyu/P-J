import './App.css';
// import './index.scss';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Edit from './pages/edit'


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
