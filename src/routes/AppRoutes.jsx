import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "../pages/Landing";

// Auth Pages
import AdminLogin from "../pages/auth/AdminLogin";
import DoctorLogin from "../pages/auth/DoctorLogin";
import PatientLogin from "../pages/auth/PatientLogin";
import PatientRegister from "../pages/auth/PatientRegister"; // <--- MAKE SURE THIS EXISTS

// Dashboards
import AdminDashboard from "../pages/admin/AdminDashboard";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import PatientDashboard from "../pages/patient/PatientDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />

        {/* Auth Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/patient/login" element={<PatientLogin />} />
        <Route path="/patient/register" element={<PatientRegister />} />

        {/* Dashboard Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;