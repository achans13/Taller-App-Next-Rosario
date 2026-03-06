'use client'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react';
import { register } from '../../api/api';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
     e.preventDefault();
     await register(username,name,password);
     router.back();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Crear cuenta
      </h2>
      <p className="text-center text-gray-500 mt-2 mb-8">
        Regístrate en la aplicación
      </p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        {/* 
        <div className="flex gap-x-4">
          <div className="flex h-6 items-center">
            <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
              <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
              <input
                id="agree-to-policies"
                name="agree-to-policies"
                type="checkbox"
                aria-label="Agree to policies"
                className="absolute inset-0 size-full appearance-none focus:outline-hidden"
              />
            </div>
          </div>

          <label htmlFor="agree-to-policies" className="text-sm text-gray-600">
            By selecting this, you agree to our{" "}
            <a href="#" className="font-semibold text-indigo-600">
              privacy policy
            </a>.
          </label>
        </div>
        */}

        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-500 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  </div>
  );
}
