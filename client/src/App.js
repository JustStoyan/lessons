import NotLogged from './components/Pages/NotLogged';
import { Route, Routes } from 'react-router-dom';
import Pricing from './components/Pages/Pricing';
import Header from './components/Header';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import { useSelector } from 'react-redux';
import Logged from './components/Pages/Logged';

//Redux 




import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const logged = useSelector((state) => state);

  return (
    <div className="App">
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={logged.isLogged ? <Logged /> : <NotLogged />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
