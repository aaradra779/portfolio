import  React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { BrowserRouter, Route, Routes } from 'react-router'
import About from './components/About.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider  , Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App />}>
      <Route path='/' element = {<Home/>} />
      <Route path='/Navbar' element = {<Navbar/>} />
      <Route path = "/About" element = {<About/>}/>
      <Route path = "/Projects" element = {<Projects/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
 
)
