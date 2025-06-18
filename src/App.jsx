
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Paste from './Component/Paste';
import View from './Component/View';

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: "/pastes",
    element:
    <div>
      <Navbar/>
      <Paste/>
    </div>
  },
  {
    path: "/pastes/:id",
    element:
    <div>
      <Navbar/>
      <View/>
    </div>
  },
])
function App() {
  

  return (
  <div>
    <RouterProvider router={router}/>
  </div>
  );
}

export default App;
