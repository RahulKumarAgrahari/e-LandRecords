import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import LayoutDefault from './layout/Default';
import Signup from './pages/Auth/Signup';
import PasswordReset from './pages/Auth/PasswordReset';
import Dashboard from './pages/Dashboard';
import LandRegistration from './pages/LandRegistration';

const router = createBrowserRouter([
  {

    path: '/',
    element: <LayoutDefault>
      <Home/>
    </LayoutDefault>
  },
  {
    path: '/login',
    element: <LayoutDefault>
      <Login/>
    </LayoutDefault>
  },
  {
    path: '/signup',
    element: <LayoutDefault>
      <Signup/>
    </LayoutDefault>
  },
  {
    path: '/password-reset',
    element: <LayoutDefault>
      <PasswordReset/>
    </LayoutDefault>
  },
  {
    path: '/dashboard',
    element: <LayoutDefault>
      <Dashboard/>
    </LayoutDefault>
  },
  {
    path: '/land-registration',
    element: <LayoutDefault>
      <LandRegistration/>
    </LayoutDefault>
  },
])


function App() {

  return (
    <>
      <div className="App">
        
        <RouterProvider router={router} />
          
      </div>
    </>
  );
}

export default App;
