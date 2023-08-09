import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/auth/Register/Register';
import Login from './pages/auth/Login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
