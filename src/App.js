import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';


import Main from './components/Main';
import Quiz from './components/Quiz';

import Statistics from './components/Statistics';
import Topics from './components/Topics';


const router = createBrowserRouter([
  {
    path: '/',
   
    element: <Main></Main>,
    children: [
     
      {
        path: '/topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>
      },
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>
      },
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics></Statistics>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/quiz/:quizId',
        loader: async({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Quiz></Quiz>
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
