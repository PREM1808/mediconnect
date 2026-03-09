import { useNavigate } from "react-router-dom";

function DoctorLogin() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/doctor/dashboard");
  };

  return (
    <div className="h-screen flex justify-center items-center">

      <div className="bg-white p-8 shadow rounded-lg w-96">

        <h2 className="text-2xl font-bold mb-6">
          Doctor Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default DoctorLogin;