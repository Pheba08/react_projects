import "./App.css";
import LoginPage from "./components/Loginpage";
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
import QuestionCreation from "./components/QuestionCreation";
import QuestionList from "./components/QuestionList";
import RejectedQuestion from "./components/RejectedQuestion";
import EditQuestion from "./components/EditQuestion";
import QuestionReview from "./components/QuestionReview";
import ApprovedQuestions from "./components/ApprovedQuestions";
import PackManagementNo from "./components/PackManagementNo";
import PackManagementHome from "./components/PackManagementHome";
import CreatedJuniorPack from "./components/CreatedJuniorPack";
import CreatedSeniorPack from "./components/CreatedSeniorPack";
import EditJuniorPack from "./components/EditJuniorPack";
import JuniorApprovedQuestions from "./components/JuniorApprovedQuestions";
import EditSeniorPack from "./components/EditSeniorPack";
import SeniorApprovedQuestions from "./components/SeniorApprovedQuestions";
import CreatePack from "./components/CreatePack";
import SelectedPack from "./components/SelectedPack";
import CollectionView from "./components/CollectionView";
import CreateAccount from "./components/Institution/CreateAccount";
import CompleteInstitutionProfile from "./components/Institution/CompleteInstitutionProfile";
import InstitutionNav from "./components/Institution/InstitutionNav";
import InstitutionDashboard from "./components/Institution/InstitutionDashboard";
import ExamPacks from "./components/Institution/ExamPacks";
import StudentsList from "./components/Institution/StudentsList";
import EnquiriesList from "./components/Institution/EnquiriesList";
import InstitutionSideNav from "./components/Institution/InstitutionSideNav";
import ProfileDetails from "./components/Institution/ProfileDetails";
import EditProfileDetails from "./components/Institution/EditProfileDetails";
import InstitutionInbox from "./components/Institution/InstitutionInbox";
import JuniorPack from "./components/Institution/JuniorPack";
import SeniorPack from "./components/Institution/SeniorPack";


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
            <Route path="master/addqualification" element={<AddQualification />} />
            <Route path="master/editqualification" element={<EditQualification />} />

            <Route path="language" element={<Language />} />
            <Route path="language/editlanguage" element={<EditLanguage />} />

            <Route path="gender" element={<Gender />} />
            <Route path="gender/editgender" element={<EditGender />} />

            <Route path="grade" element={<Grade />} />
            <Route path="grade/editgrade" element={<EditGrade />} />

            <Route path="subject" element={<Subject />} />
            <Route path="subject/editsubject" element={<Editsubject />} />

            <Route path="topic" element={<Topic />} />
            <Route path="topic/edittopic" element={<EditTopic />} />

            <Route path="category" element={<Category />} />
            <Route path="category/editcategory" element={<EditCategory />} />

            <Route path="rolemanagement" element={<RoleManagement />} />
            <Route path="rolemanagement/editrole" element={<EditRole />} />

            <Route
              path="/loginauthorization"
              element={<LoginAuthorization />}
            />
            <Route path="/counsellors" element={<Counsellors />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/counsellorprofile" element={<CounsellorProfile />} />

            <Route
              path="/institutionprofile"
              element={<InstitutionProfile />}
            />
            <Route path="/certificates" element={<Certificates />} />

            <Route path="/questioncreation" element={<QuestionCreation />} />
            <Route path="questionlist" element={<QuestionList />} />
            <Route path="rejectedquestion" element={<RejectedQuestion />} />
            <Route path="/editquestion" element={<EditQuestion />} />

            <Route path="/questionreview" element={<QuestionReview />} />
            <Route path="approvedquestions" element={<ApprovedQuestions />} />

            <Route path="/packmanagementno" element={<PackManagementNo />} />
            <Route path="/packmanagementhome" element={<PackManagementHome />} />

            <Route path="/createpack" element={<CreatePack />} />
            <Route path="selectedpack" element={<SelectedPack />} />

            <Route path="/createdjuniorpack" element={<CreatedJuniorPack />} />
            <Route path="/createdseniorpack" element={<CreatedSeniorPack />} />

            <Route path="/editjuniorpack" element={<EditJuniorPack />} />
            <Route path="juniorpackapprovedquestions" element={<JuniorApprovedQuestions />} />

            <Route path="/editseniorpack" element={<EditSeniorPack />} />
            <Route path="seniorpackapprovedquestions" element={<SeniorApprovedQuestions />} />

            <Route path="/collectionview" element={<CollectionView />} />

            <Route path="/createaccount" element={<CreateAccount />} />

            <Route path="/completeinstitutionprofile" element={<CompleteInstitutionProfile />} />

            <Route path="/institutionnav" element={<InstitutionNav />} />
              <Route path="institutiondashboard" element={<InstitutionDashboard />} />
              <Route path="institutioninbox" element={<InstitutionInbox />} />
              <Route path="exampacks" element={<ExamPacks />} />
              <Route path="studentslist" element={<StudentsList />} />
              <Route path="enquirieslist" element={<EnquiriesList />} />

            <Route path="/institutionsidenav" element={<InstitutionSideNav />} />
              <Route path="juniorpack" element={<JuniorPack />} />
              <Route path="seniorpack" element={<SeniorPack />} />

            <Route path="/profiledetails" element={<ProfileDetails />} />
            <Route path="/editprofiledetails" element={<EditProfileDetails />} />
              <Route path="institutiondashboard" element={<InstitutionDashboard />} />
              <Route path="institutioninbox" element={<InstitutionInbox />} />
              <Route path="exampacks" element={<ExamPacks />} />
              <Route path="studentslist" element={<StudentsList />} />
              <Route path="enquirieslist" element={<EnquiriesList />} />

          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
