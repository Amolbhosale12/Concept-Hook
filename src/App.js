import logo from './logo.svg';
import './App.css';
import HookUseContext from './Components/HookUseContext'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<HookUseContext/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
  ;
}

export default App;
