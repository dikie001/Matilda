import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Toaster } from "sonner";
import { lazy, Suspense, useEffect } from "react";
import LoadingPage from "./pages/MATILDA/LoadinPage";
import About from "./pages/SUPPORT/About";
import Help from "./pages/SUPPORT/Help";
import Results from "./pages/MATILDA/Results";
import AdminDashboard from "./pages/ADMIN/AdminDashboard";
import { trackDailyLogin } from "./lib/trackDailyLogin";
import { USER_INFO } from "./constants";
import { syncQuizResultsToFirebase } from "./lib/syncQuizResultsToFirebase";
import AdminAuth from "./pages/ADMIN/Auth";
import AdminMessages from "./pages/ADMIN/Messages";
import UsersPage from "./pages/ADMIN/Users";
import AdminSettings from "./pages/ADMIN/Settings";
import AdminReports from "./pages/ADMIN/Reports";
import AdminNotifications from "./pages/ADMIN/Notifications";
import AdminResetPanel from "./pages/ADMIN/AdminResetPanel";
import PracticeCommunication from "./pages/DEV/PracticeCommunication";
import { useUpdateListener } from "./hooks/useUpdateListener";
import WordPower from "./pages/MATILDA/WordPower";
import PWAInstallModal from "./components/PWAInstall";
import GavinQuickQuiz from "./pages/ANN/GavinQuickQuiz";
import RyanneQuickQuiz from "./pages/DIKIE/RyanneQuickQuiz";
import RyanneResults from "./pages/DIKIE/RyanneResults";
import GavinResults from "./pages/ANN/GavinResults";
import DanielQuickQuiz from "./pages/DANIEL/DanielQuickQuiz";
import DanielResults from "./pages/DANIEL/DanielResults";
import LincolnQuickQuiz from "./pages/LINCOLN/LincolnQuickQuiz";
import LincolnResults from "./pages/LINCOLN/LincolnResults";
import Reading from "./pages/Reading";
const FactFrenzy = lazy(() => import("./pages/MATILDA/FunFacts"));
const BrainTeasers = lazy(() => import("./pages/MATILDA/QuickChallenges"));
const HomePage = lazy(() => import("./pages/MATILDA/HomePage"));
const MiniStories = lazy(() => import("./pages/MATILDA/FlashStories"));
const NotFound = lazy(() => import("./pages/NotFound"));
const QuizQuest = lazy(() => import("./pages/MATILDA/QuickQuiz"));
const SettingsPage = lazy(() => import("./pages/MATILDA/Settings"));
const TongueTwisters = lazy(() => import("./pages/MATILDA/ClearSpeech"));
const WisdomNuggets = lazy(() => import("./pages/MATILDA/LifeGems"));
const ContactDeveloper = lazy(() => import("./pages/SUPPORT/ContactDeveloper"));

const App = () => {
  //Initialize the listener
  useUpdateListener();

  // Track daily logins
  useEffect(() => {
    const userData = localStorage.getItem(USER_INFO);
    if (!userData) return;

    const parsedData = userData ? JSON.parse(userData) : [];
    try {
      trackDailyLogin(parsedData.id);
      syncQuizResultsToFirebase(parsedData.id);
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <Router>
      <PWAInstallModal />
      <Toaster richColors position="top-center" />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quick-challenges" element={<BrainTeasers />} />{" "}
          <Route path="/flash-stories" element={<MiniStories />} />{" "}
          <Route path="/quick-quiz" element={<QuizQuest />} />{" "}
          <Route path="/life-gems" element={<WisdomNuggets />} />{" "}
          <Route path="/clear-speech" element={<TongueTwisters />} />
          <Route path="/fun-facts" element={<FactFrenzy />} />
          <Route path="/results" element={<Results />} />
          <Route path="/communication" element={<PracticeCommunication />} />
          <Route path="/word-power" element={<WordPower />} />
          <Route path="/contact-developer" element={<ContactDeveloper />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/admin-auth" element={<AdminAuth />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/notifications" element={<AdminNotifications />} />
          {/* RYANNE AND GAVIN */}
          <Route path="/gavin/quiz" element={<GavinQuickQuiz />} />
          <Route path="/ryanne/quiz" element={<RyanneQuickQuiz />} />
          <Route path="/ryanne/results" element={<RyanneResults />} />
          <Route path="/gavin/results" element={<GavinResults />} />
          {/* DANIEL */}
          <Route path="/daniel/quiz" element={<DanielQuickQuiz />} />
          <Route path="/daniel/results" element={<DanielResults />} />
          {/* LINCOLN */}
          <Route path="/lincoln/quiz" element={<LincolnQuickQuiz />} />
          <Route path="/lincoln/results" element={<LincolnResults />} />
          <Route path="/reading" element={<Reading />} />
          {/* Hidden Admin Reset Panel */}
          <Route path="/admin/reset-panel" element={<AdminResetPanel />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
