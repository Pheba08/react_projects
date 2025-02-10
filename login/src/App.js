import "./App.css";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import CheckEmail from "./components/CheckEmail";
import CreatePassword from "./components/CreatePassword";
import DummyHome from "./components/DummyHome";
import HomePage from "./components/HomePage";

import Profile from "./components/Profile";

import EditProfile from "./components/EditProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Inbox from "./components/Inbox";
import Master from "./components/Master";
import EditQualification from "./components/EditQualification";
import AddQualification from "./components/AddQualification";

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

            <Route path="/profile" element={<Profile />} />

            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/master" element={<Master />} />
            <Route path="/editqualification" element={<EditQualification />} />
            <Route path="/addqualification" element={<AddQualification />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
