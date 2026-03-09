import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AdminLayout({ children }) {

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

export default AdminLayout;