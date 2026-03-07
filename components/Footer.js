'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white-900 text-black mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">Rutas del Sabor</h2>
          <p className="text-sm text-black-300">
            tu lugar para conocer lugares y compartir experiencias!
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Navegación</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Salir
              </Link>
            </li>
            <li>
              <Link href="/ListadoPlatos" className="hover:text-yellow-400">
                Platos
              </Link>
            </li>
            <li>
              <Link href="/ListadoPrincipal" className="hover:text-yellow-400">
                Locales
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Tecnologías</h2>
          <p className="text-sm text-black-300">
            Desarrollado con Next.js, React y Tailwind CSS como parte del
            taller de desarrollo frontend.
          </p>
        </div>
      </div>
      <div className="border-t border-black-700 text-center py-4 text-sm text-black-400">
        © 2026 Rutas del Sabor – Taller de Desarrollo Frontend
      </div>
    </footer>
  );
}