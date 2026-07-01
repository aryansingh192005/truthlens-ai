import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import AuthForm from "../components/auth/AuthForm";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [error, setError] = useState("");

  async function handleLogin(form) {
    try {
      setError("");

      const response = await loginUser({
        email: form.email,
        password: form.password,
      });

      login(response.access_token);

      navigate("/analysis");
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Login failed."
      );
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md">

        <AuthForm
          title="Login"
          submitText="Login"
          onSubmit={handleLogin}
        />

        {error && (
          <p className="mt-4 text-center text-red-400">
            {error}
          </p>
        )}

        <p className="mt-6 text-center text-slate-400">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}