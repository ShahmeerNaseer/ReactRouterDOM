import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./components/ProtectedRoute";

import UnprotectedRoute from "./components/UnprotectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Assignments from "./pages/Assignments";
import Settings from "./pages/Settings";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Navbar />}>

          {/* Public Routes */}

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          {/* Unprotected */}

          <Route
            path="login"
            element={
              <UnprotectedRoute>

                <Login />

              </UnprotectedRoute>
            }
          />

          <Route
            path="register"
            element={
              <UnprotectedRoute>

                <Register />

              </UnprotectedRoute>
            }
          />

          {/* Protected */}

          <Route
            path="dashboard"
            element={
              <ProtectedRoute>

                <Dashboard />

              </ProtectedRoute>
            }
          />

          <Route
            path="courses"
            element={
              <ProtectedRoute>

                <Courses />

              </ProtectedRoute>
            }
          />

          <Route
            path="profile"
            element={
              <ProtectedRoute>

                <Profile />

              </ProtectedRoute>
            }
          />

          <Route
            path="assignments"
            element={
              <ProtectedRoute>

                <Assignments />

              </ProtectedRoute>
            }
          />

          <Route
            path="settings"
            element={
              <ProtectedRoute>

                <Settings />

              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;