import { useState } from "react";
import { auth, db } from "../../firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export default function PatientRegister() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        name: formData.name,
        email: formData.email,
        role: "patient",
        createdAt: new Date()
      });
      navigate("/patient/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-[2rem] shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Patient Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            type="text" placeholder="Full Name" required
            className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" placeholder="Email" required
            className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Password" required
            className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
            {loading ? "Processing..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-6 text-center text-slate-600">
          Already have an account? <Link to="/patient/login" className="text-blue-600 font-bold">Log in</Link>
        </p>
      </div>
    </div>
  );
}