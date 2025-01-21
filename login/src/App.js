import "./App.css";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import CheckEmail from "./components/CheckEmail";
import CreatePassword from "./components/CreatePassword";
import Home from "./components/Home";
import ChooseRole from "./components/ChooseRole";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/checkemail" element={<CheckEmail />} />
            <Route path="/createpassword" element={<CreatePassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/chooserole" element={<ChooseRole />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
