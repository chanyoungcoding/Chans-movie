import { Route, Routes } from 'react-router-dom';
import {Suspense, lazy} from 'react'

import './App.css';

import Common from './pages/Common';
import Main from './pages/Main';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

function App() {

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
