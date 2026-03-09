import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-50">

      <h1 className="text-4xl font-bold mb-8">
        Healthcare AI System
      </h1>

      <p className="mb-10 text-gray-600">
        Select Login Type
      </p>

      <div className="flex gap-6">

        <button
          onClick={() => navigate("/admin/login")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Admin
        </button>

        <button
          onClick={() => navigate("/doctor/login")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Doctor
        </button>

        <button
          onClick={() => navigate("/patient/login")}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg"
        >
          Patient
        </button>

      </div>
    </div>
  );
}

export default Landing;