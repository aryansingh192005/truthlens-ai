import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthForm from "../components/auth/AuthForm";
import { registerUser } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  async function handleRegister(form) {
    try {
      setError("");

      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Registration failed."
      );
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md">

        <AuthForm
          title="Register"
          submitText="Create Account"
          onSubmit={handleRegister}
        />

        {error && (
          <p className="mt-4 text-center text-red-400">
            {error}
          </p>
        )}

        <p className="mt-6 text-center text-slate-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}