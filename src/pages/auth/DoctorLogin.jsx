import { useState } from "react";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export default function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ROLE VERIFICATION
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (userDoc.exists() && userDoc.data().role === "doctor") {
        navigate("/doctor/dashboard");
      } else {
        // Not a doctor? Sign them out immediately!
        await auth.signOut();
        alert("Access Denied: This account is not registered as a Doctor.");
      }
    } catch (err) {
      alert("Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Doctor Portal</h2>
          <p className="text-slate-500 mt-2">Sign in to manage your patients</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <input 
            type="email" placeholder="Doctor Email" 
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-emerald-400 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" placeholder="Password" 
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-emerald-400 outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button 
            disabled={loading}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold transition-all shadow-lg"
          >
            {loading ? "Authenticating..." : "Login to Dashboard"}
          </button>
        </form>
        <p className="mt-8 text-center text-slate-500">
          Need a doctor account? <Link to="/doctor/register" className="text-emerald-600 font-bold underline">Register</Link>
        </p>
      </div>
    </div>
  );
}