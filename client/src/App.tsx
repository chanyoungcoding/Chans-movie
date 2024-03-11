import { Route, Routes } from 'react-router-dom';
import Common from './pages/Common';
import Home from './pages/Home';
import './App.css';
import Main from './pages/Main';
function App() {

  return (
    <Routes>
      <Route element={<Common/>}>
        <Route index element={<Main/>}/>
        <Route path='/home' element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
