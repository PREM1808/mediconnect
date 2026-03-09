import { useState } from "react";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function PatientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      
      if (userDoc.exists() && userDoc.data().role === "patient") {
        navigate("/patient/dashboard");
      } else {
        await auth.signOut();
        alert("Unauthorized: This is not a patient account.");
      }
    } catch (err) {
      alert("Login failed! Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-indigo-900">Patient Login</h2>
          <p className="text-indigo-600/70 mt-2 font-medium">Welcome back to MediConnect</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button 
            disabled={loading}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-lg disabled:bg-indigo-300"
          >
            {loading ? "Verifying..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-center text-indigo-900/60 font-medium">
          New patient? <Link to="/patient/register" className="text-indigo-600 font-bold hover:underline">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

// THIS LINE WAS MISSING AND IS CAUSING THE ERROR:
export default PatientLogin;