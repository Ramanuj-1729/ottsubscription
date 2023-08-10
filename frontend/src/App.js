import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/auth/Register/Register';
import Login from './pages/auth/Login/Login';
import Subscription from './pages/Subscription/Subscription';
import Payment from './pages/Payment/Payment';
import SelectedPlan from './pages/SelectedPlan/SelectedPlan';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="payment" element={<Payment />} />
          <Route path="selected-plan" element={<SelectedPlan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
