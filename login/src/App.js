import "./App.css";
import Loginpage from "./components/Loginpage";
import Forgotpassword from "./components/Forgotpassword";
import Checkemail from "./components/Checkemail";
import Createpassword from "./components/Createpassword";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/checkemail" element={<Checkemail />} />
            <Route path="/createpassword" element={<Createpassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/loginpage" element={<Loginpage />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
