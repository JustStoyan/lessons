import NotLogged from './components/Pages/NotLogged';
import { Route, Routes } from 'react-router-dom';
import Pricing from './components/Pages/Pricing';
import Header from './components/Header';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<NotLogged />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
