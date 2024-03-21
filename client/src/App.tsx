import { Route, Routes } from 'react-router-dom';
import {Suspense, lazy, useEffect} from 'react'

import './App.css';

import Common from './pages/Common';
import Main from './pages/Main';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

function App() {

  useEffect(() => {
    import("./pages/Home");
  }, [])

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<Common/>}>
          <Route index element={<Main/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
