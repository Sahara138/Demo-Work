import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import {store} from '../src/store/store.js';
// import OrderForm from './components/Products/OrderForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider  store={store}>
      <App />
      {/* <OrderForm /> */}
      <ToastContainer />
    </Provider>
  </StrictMode>,
)
