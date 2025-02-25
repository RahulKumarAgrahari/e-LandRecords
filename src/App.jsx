import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import LayoutDefault from './layout/Default';

const router = createBrowserRouter([
  {

    path: '/',
    element: <LayoutDefault>
      <Home/>
    </LayoutDefault>
  },
  {
    path: '/login',
    element: <Login/>
  }
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
