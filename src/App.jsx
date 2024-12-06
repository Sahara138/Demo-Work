import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './components/Users/Registration';
import Login from './components/Users/Login';
import MasterLayout from './components/layout/MasterLayout';
import { getAuthToken } from './helper/SessionHelper';
// import CustomerCreateUpdatePage from './pages/CustomerCreateUpdatePage';
import HomePage from './pages/HomePage';
import OrderForm from './components/Products/OrderForm';
import OrderList from './components/Products/OrderList';

function App() {
  const token = getAuthToken();

  const routes = [
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        
        { 
          path: "/dashboard", 
          element: <h1>Dashboard</h1> 
        },
        { 
          path: "/profile", 
          element: <h1>Profile</h1> 
        },
        { 
          path: "/add-order", 
          element: <OrderForm />
        },
        { 
          path: "/order-list", 
          element: <OrderList />
        },
        
        // { 
        //   path: "/customer", 
        //   element: <CustomerCreateUpdatePage /> 
        // },
        { 
          path: "*", 
          element: <h1>Not found</h1> 
        },
      ],
    },
    { 
      path: "/login", 
      element: <Login /> 
    },
    { 
      path: "/registration", 
      element: <Registration /> 
    },
    { 
      path: "/home", 
      element: <HomePage /> 
    },
    
  ];

  // Optionally filter or modify routes based on the token
  const authenticRoutes = token ? routes : routes.filter(route => route.path !== '/profile');

  const router = createBrowserRouter(authenticRoutes);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

