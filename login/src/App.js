import "./App.css";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import CheckEmail from "./components/CheckEmail";
import CreatePassword from "./components/CreatePassword";
import DummyHome from "./components/DummyHome";
import HomePage from "./components/HomePage";
import NavHome from "./components/NavHome";
import Profile from "./components/Profile";
import NavEditProfile from "./components/NavEditProfile";
import EditProfile from "./components/EditProfile";
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
            <Route path="/dummyhome" element={<DummyHome />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/navhome" element={<NavHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/naveditprofile" element={<NavEditProfile />} />
            <Route path="/editprofile" element={<EditProfile />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
