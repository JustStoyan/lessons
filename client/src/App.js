import NotLogged from './components/Pages/NotLogged';
import { Route, Routes } from 'react-router-dom';
import Pricing from './components/Pages/Pricing';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<NotLogged />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Pricing />} />
          <Route path="register" element={<Pricing />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
