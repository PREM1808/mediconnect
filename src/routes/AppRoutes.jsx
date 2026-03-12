import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "../pages/Landing";

// Auth Pages
import AdminLogin from "../pages/auth/AdminLogin";
import DoctorLogin from "../pages/auth/DoctorLogin";
import DoctorRegister from "../pages/auth/DoctorRegister"; // Imported
import PatientLogin from "../pages/auth/PatientLogin";
import PatientRegister from "../pages/auth/PatientRegister"; 

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

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Doctor Routes */}
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/register" element={<DoctorRegister />} /> {/* ADDED THIS */}
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

        {/* Patient Routes */}
        <Route path="/patient/login" element={<PatientLogin />} />
        <Route path="/patient/register" element={<PatientRegister />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;