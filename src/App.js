import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Main from './components/Main';
import Statastics from './components/Statastics';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statastics></Statastics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
