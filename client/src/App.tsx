import { Route, Routes } from 'react-router-dom';
import Common from './pages/Common';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route element={<Common/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
