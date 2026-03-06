'use client'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react';
import { login } from '../api/api';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
     e.preventDefault();
    await login(username,password);
    router.push("/ListadoPrincipal");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-center text-gray-800">
        Login
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Inicia sesión en tu cuenta
      </p>

      <form className="mt-8 space-y-6">

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition"
        >
          Login
        </button>

      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        ¿No tienes usuario?{" "}
        <Link href="/Register" className="text-indigo-600 hover:underline">
          Regístrate aquí
        </Link>
      </p>

    </div>
  </div>
);
}
