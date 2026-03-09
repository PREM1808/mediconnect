import DashboardLayout from "../../components/layout/AdminLayout";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentAppointments from "../../components/dashboard/RecentAppointments";

const AdminDashboard = () => {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <StatsCard title="Total Patients" value="120" />
        <StatsCard title="Doctors Available" value="15" />
        <StatsCard title="Appointments Today" value="34" />
        <StatsCard title="Medical Reports" value="89" />

      </div>

      {/* Appointments Table */}
      <RecentAppointments />

    </DashboardLayout>
  );
};

export default AdminDashboard;