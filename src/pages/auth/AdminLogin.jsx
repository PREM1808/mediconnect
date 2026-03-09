import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../firebase"; // Keep ONLY the one with the correct path

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid email or password");
      console.error(err.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-8 shadow rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
        
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;