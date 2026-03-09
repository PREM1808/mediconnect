import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";

import AdminLogin from "../pages/auth/AdminLogin";
import DoctorLogin from "../pages/auth/DoctorLogin";
import PatientLogin from "../pages/auth/PatientLogin";

import AdminDashboard from "../pages/admin/AdminDashboard";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import PatientDashboard from "../pages/patient/PatientDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/patient/login" element={<PatientLogin />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;