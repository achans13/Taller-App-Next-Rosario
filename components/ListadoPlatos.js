'use client';
import { useEffect, useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import {getLocals} from "../api/api";
import { getDishes } from "../api/api";
import Link from "next/link";


const ListadoPlatosComponents = () => {

    const [token, setToken] = useState("");
    const [user,setUser] = useState({});
    const [locals,setLocals] = useState([]);
    const [dishes,setDishes] = useState([])
    const [query, setQuery] = useState("");
    const [name , setName] = useState("");
    const [category , setCategory] = useState("");
    const [localId , setLocalId] = useState("");
    const [city , setCity] = useState("");
    const [price , setPrice] = useState("");
    const [description , setDescription] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");


    useEffect(() =>{
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("Usuario en listado principal", user);
        console.log("Token en Listado Principal", token);
        setUser(user);
        setToken(token);
    }, [])

    useEffect(() =>{
        const fetchDishes = async () => {
            console.log("Local seleccionado:", localId);
            const data = await getDishes(query,category,dateFrom,dateTo,city,localId);
            setDishes(data.items);
        }

        fetchDishes();
    },[query,category,dateFrom,dateTo,city,localId])

    useEffect(() => {
  fetch("https://api-react-taller-production.up.railway.app/api/locals")
    .then((res) => res.json())
    .then((data) => setLocals(data.items));
}, []);
    


    return(
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-10 text-gray-800">
            Explorar platos
        </h1>
        <div className="grid grid-cols-1 mb-10 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 bg-white p-6 rounded-xl shadow">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Buscar
            </label>
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              className="mt-2 w-full rounded-md border px-3 py-2"
              placeholder="Buscar plato..."
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Fecha desde
            </label>
            <input
              type="date"
              onChange={(e) => setDateFrom(e.target.value)}
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Fecha hasta
            </label>
            <input
              type="date"
              onChange={(e) => setDateTo(e.target.value)}
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
              Local
            </label>
            <select
              onChange={(e) => setLocalId(Number(e.target.value))}
              className="mt-2 w-full rounded-md border px-3 py-2"
            >
              <option value="">Todos los locales</option>
              {locals.map((local) => (
                <option key={local.id} value={local.id}>
                  {local.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Listado de platos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dishes.map((dish) => (

            <div
              key={dish.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                alt={dish.name}
                src={"https://media.gettyimages.com/id/2022469376/es/vector/icono-de-plato-tenedor-y-cuchillo-con-trazo-editable.jpg?s=612x612&w=gi&k=20&c=9POvkSyh0igPo3M5GX5iz6_D0OPAPxe4zotLZWr_P-A="}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    <Link href={`/DetallePlato/${dish.id}`}>
                      {dish.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">
                    {dish.city}
                  </p>
                </div>
                <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  ${dish.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>)
}


export default ListadoPlatosComponents;