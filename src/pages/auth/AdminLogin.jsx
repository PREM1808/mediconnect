import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../firebase"; 

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid email or password");
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-6">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] p-10 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/20 mb-6">
              <span className="text-3xl text-white">🔐</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Admin Gateway</h2>
            <p className="text-slate-400 mt-2 text-sm font-medium uppercase tracking-[0.2em]">Secure Terminal</p>
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl mb-6 text-sm flex items-center gap-3 animate-shake">
              <span className="text-lg">⚠️</span> {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Admin Email</label>
              <input
                type="email"
                placeholder="id@system.local"
                className="w-full bg-slate-800/50 border border-slate-700 text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Access Key</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-800/50 border border-slate-700 text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98]"
            >
              Authorize Entry
            </button>
          </form>

          {/* Footer Footer */}
          <div className="mt-10 text-center border-t border-slate-800 pt-6">
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
              System Protected by AES-256 Encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;