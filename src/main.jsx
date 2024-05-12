import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import {ChakraProvider,extendTheme ,ColorModeScript} from '@chakra-ui/react'
import ColorModeSwitcher from "./ColorModeSwitcher.jsx"
import Home from './components/Home.jsx'
import Videos from './components/Videos.jsx'
import Upload from './components/Upload.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/videos',
        element: <Videos/>
      },
      {
        path: '/upload',
        element: <Upload/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      }
    ]
  }
])




// const theme = extendTheme({ colors})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider >
      <ColorModeSwitcher/>
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
