import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App> </App>
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: "/contact",
//     element:  <Contact></Contact>
//   },
  
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
     </RouterProvider>
  </React.StrictMode>,
)
