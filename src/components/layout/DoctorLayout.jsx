import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

function DoctorLayout({ children }) {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}

export default DoctorLayout;