import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Administrator",
      desc: "Manage hospital staff, system analytics, and security protocols.",
      path: "/admin/login",
      icon: "🛡️",
      color: "border-blue-200 hover:bg-blue-50 text-blue-700",
      btn: "bg-blue-600"
    },
    {
      title: "Medical Professional",
      desc: "Access AI diagnostics, patient history, and clinical schedules.",
      path: "/doctor/login",
      icon: "👨‍⚕️",
      color: "border-emerald-200 hover:bg-emerald-50 text-emerald-700",
      btn: "bg-emerald-600"
    },
    {
      title: "Patient Portal",
      desc: "View your AI health insights, reports, and book consultations.",
      path: "/patient/login",
      icon: "🏥",
      color: "border-indigo-200 hover:bg-indigo-50 text-indigo-700",
      btn: "bg-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-50"></div>

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          Next-Gen Medical Intelligence
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          MediConnect <span className="text-blue-600">AI</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          The unified ecosystem for healthcare professionals and patients, 
          powered by advanced diagnostic neural networks.
        </p>
      </div>

      {/* Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full relative z-10">
        {roles.map((role, index) => (
          <div 
            key={index}
            className={`group bg-white border-2 ${role.color} p-8 rounded-[2rem] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between`}
          >
            <div>
              <div className="text-4xl mb-6 bg-white shadow-sm w-16 h-16 flex items-center justify-center rounded-2xl border border-slate-100">
                {role.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">{role.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {role.desc}
              </p>
            </div>
            
            <button
              onClick={() => navigate(role.path)}
              className={`w-full ${role.btn} text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-transform active:scale-95 group-hover:brightness-110`}
            >
              Enter Portal
            </button>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-20 text-slate-400 text-sm font-medium">
        © 2026 MediConnect AI Systems • HIPAA Compliant • AES-256 Encrypted
      </div>
    </div>
  );
}

export default Landing;