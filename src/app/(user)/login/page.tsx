"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { postLogin } from "@/services/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postLogin({ email, password });
      if (response.token) {
        // Guarda el token y redirige al dashboard
        localStorage.setItem("token", response.token);
        router.push("/main/dashboard");
      } else if (response.error) {
        setError(response.error);
      }
    } catch (err) {
      console.error(err);
      setError("Error al iniciar sesión");
    }
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white p-6 rounded shadow-md"
        >
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
          <button className="mt-4 text-blue-500 hover:underline">
            ¿No tienes una cuenta? Regístrate
          </button>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
