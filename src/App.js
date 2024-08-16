import logo from './logo.svg';
import './App.css';
import { RouterProvider, Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Landing } from './content/Landing';
import { Menu } from './content/menu-content/Menu-Page.js';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={ <Landing /> }/>
      <Route path='/menu' element={ <Menu /> }/>
    </Route>
      ));
  

  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
    
    </>
  ); 
}

export default App;
