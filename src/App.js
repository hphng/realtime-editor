import logo from './logo.svg';
import './App.css';

import Home from './page/Home';
import EditorPage from './page/EditorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
          <BrowserRouter>
            <Routes>
              <Route path = '/' element={<Home />}> </Route>
              <Route path = '/editor/:roomId' element={<EditorPage />}> </Route>
            </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
