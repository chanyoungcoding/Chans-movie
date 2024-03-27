import { Route, Routes } from 'react-router-dom';
import {Suspense, lazy, useEffect} from 'react';
import { Provider } from "jotai";

import './App.css';

import Common from './pages/Common';
import Main from './pages/Main';
import Detail from './pages/Detail';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

function App() {

  useEffect(() => {
    import("./pages/Home");
  }, [])

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Provider>
        <Routes>
          <Route element={<Common/>}>
            <Route index element={<Main/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/detail' element={<Detail/>}/>
          </Route>
        </Routes>
      </Provider>
    </Suspense>
  )
}

export default App
