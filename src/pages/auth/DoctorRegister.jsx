import { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export default function DoctorRegister() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", specialization: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      // Save Doctor Profile with "doctor" role
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        name: formData.name,
        email: formData.email,
        specialization: formData.specialization,
        role: "doctor",
        createdAt: new Date()
      });

      navigate("/doctor/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-emerald-100">
        <div className="text-center mb-6">
          <span className="text-4xl">👨‍⚕️</span>
          <h2 className="text-2xl font-bold text-slate-800 mt-2">Doctor Registration</h2>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            type="text" placeholder="Full Name" required
            className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="text" placeholder="Medical Specialization (e.g. Cardiologist)" required
            className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) => setFormData({...formData, specialization: e.target.value})}
          />
          <input 
            type="email" placeholder="Professional Email" required
            className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Password" required
            className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button disabled={loading} className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg">
            {loading ? "Registering..." : "Join Medical Staff"}
          </button>
        </form>
        <p className="mt-6 text-center text-slate-600">
          Already registered? <Link to="/doctor/login" className="text-emerald-600 font-bold underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}