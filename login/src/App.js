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
import RoleManagement from "./components/RoleManagement";
import LoginAuthorization from "./components/LoginAuthorization";
import Counsellors from "./components/Counsellors";
import Institutions from "./components/Institutions";
import CounsellorProfile from "./components/CounsellorProfile";
import Language from "./components/Language";
import EditRole from "./components/EditRole";
import EditLanguage from "./components/EditLanguage";
import Gender from "./components/Gender";
import EditGender from "./components/EditGender";
import Grade from "./components/Grade";
import EditGrade from "./components/EditGrade";
import Subject from "./components/Subject";
import Editsubject from "./components/EditSubject";
import Topic from "./components/Topic";
import EditTopic from "./components/EditTopic";
import Category from "./components/Category";
import EditCategory from "./components/EditCategory";
import InstitutionProfile from "./components/InstitutionProfile";
import Certificates from "./components/Certificates";
import NavMaster from "./components/NavMaster";
import SideNavMaster from "./components/SideNavMaster";

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

            <Route path="/navmaster" element={<NavMaster />} />
            <Route path="/sidenavmaster" element={<SideNavMaster />} />

            <Route path="/master" element={<Master />} />
            <Route path="language" element={<Language />} />
            <Route path="gender" element={<Gender />} />
            <Route path="grade" element={<Grade />} />
            <Route path="subject" element={<Subject />} />
            <Route path="topic" element={<Topic />} />
            <Route path="category" element={<Category />} />
            <Route path="rolemanagement" element={<RoleManagement />} />
            <Route path="addqualification" element={<AddQualification />} />

            <Route path="/editqualification" element={<EditQualification />} />
            

            <Route
              path="/loginauthorization"
              element={<LoginAuthorization />}
            />
            <Route path="/counsellors" element={<Counsellors />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/counsellorprofile" element={<CounsellorProfile />} />

            <Route path="/editrole" element={<EditRole />} />
            <Route path="/editlanguage" element={<EditLanguage />} />
            <Route path="/editgender" element={<EditGender />} />
            <Route path="/editgrade" element={<EditGrade />} />
            <Route path="/editsubject" element={<Editsubject />} />
            <Route path="/edittopic" element={<EditTopic />} />
            <Route path="/editcategory" element={<EditCategory />} />
            <Route
              path="/institutionprofile"
              element={<InstitutionProfile />}
            />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
