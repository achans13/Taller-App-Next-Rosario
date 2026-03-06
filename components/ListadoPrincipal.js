'use client';
import { useEffect, useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import {getLocals} from "../api/api";
import Link from "next/link";


const ListadoPrincialComponents = () => {
 const [token, setToken] = useState("");
  const [user,setUser] = useState({});
  const [locals,setLocals] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("")
  const [priceRange , setPriceRange] = useState("");
  const [rating , setRating] = useState("");
  const [city , setCity] = useState("");
  const [zone , setZone] = useState("");


  useEffect(() =>{
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Usuario en listado principal", user);
    console.log("Token en Listado Principal", token);
    setUser(user);
    setToken(token);
  }, [])

  useEffect(() =>{
    const fetchLocals = async () => {
      const data = await getLocals(query,type,priceRange,rating,city,zone);
      setLocals(data.items);
    }

    fetchLocals();
  },[query,type,priceRange,rating,city,zone])

    return (
    <div className="bg-gray-100 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-12">
            <h1 className="text-3xl font-bold mb-10 text-gray-800">
              Explorar locales
            </h1>
              <div className="grid grid-cols-1 mb-10 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                     <label className="block text-sm font-semibold text-gray-700">
                            Buscar
                     </label>
               <input
                  type="text"
                  onChange={(e) => setQuery(e.target.value)}
                  className="mt-2 w-full rounded-md border px-3 py-2"
                  placeholder="Buscar local..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Rating
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setRating(e.target.value)}
                            className="mt-2 w-full rounded-md border px-3 py-2"
                            placeholder="Ej: 4"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Zona
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setZone(e.target.value)}
                            className="mt-2 w-full rounded-md border px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Ciudad
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                            className="mt-2 w-full rounded-md border px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Rango de precio
                        </label>
                        <select
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="mt-2 w-full rounded-md border px-3 py-2"
                        >
                            <option value={""}>Ninguno</option>
                            <option value={"ECONOMICO"}>Económico</option>
                            <option value={"MEDIO"}>Medio</option>
                            <option value={"ALTO"}>Alto</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Tipo
                        </label>
                        <select
                            onChange={(e) => setType(e.target.value)}
                            className="mt-2 w-full rounded-md border px-3 py-2">
                            <option value={""}>Ninguno</option>
                            <option value={"CAFETERIA"}>Cafeteria</option>
                            <option value={"RESTAURANTE"}>Restaurante</option>
                            <option value={"BAR"}>Bar</option>
                            <option value={"FOOD_TRUCK"}>Food Truck</option>
                            <option value={"OTROS"}>Otros</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {locals.map((local) => (
                        <div
                            key={local.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            <img
                                alt={local.name}
                                src={local.photos?.[0] || "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/01/restaurantes-lomas-chapultepec-aitana.jpg"}
                                className="h-56 w-full object-cover"
                            />
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        <Link href={`/DetalleLocal/${local.id}`}>
                                            {local.name}
                                        </Link>
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {local.city}
                                    </p>
                                </div>
                                <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                                    {local.priceRange}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListadoPrincialComponents;