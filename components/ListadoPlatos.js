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
    <div className="bg-white">

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 mb-7 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="query" className="block text-sm/6 font-semibold text-gray-900">
              Query
            </label>
            <div className="mt-2.5">
              <input
                id="query"
                name="query"
                type="text"
                autoComplete="given-query"
                onChange={(e) => setQuery(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="dateFrom" className="block text-sm/6 font-semibold text-gray-900">
              Date From
            </label>
            <div className="mt-2.5">
              <input
                id="dateFrom"
                name="dateFrom"
                type="date"
                onChange={(e) => setDateFrom(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="dateTo" className="block text-sm/6 font-semibold text-gray-900">
              Date to
            </label>
            <div className="mt-2.5">
              <input
                id="dateTo"
                name="dateTo"
                type="date"
                autoComplete="given-zone"
                onChange={(e) => setDateTo(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="city" className="block text-sm/6 font-semibold text-gray-900">
              City
            </label>
            <div className="mt-2.5">
              <input
                id="city"
                name="city"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
              Local
            </label>
            <select
                    id="localId"
                    name="localId"
                    autoComplete="localId"
                    aria-label="localId"
                    onChange={(e) => setLocalId(Number(e.target.value))}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="">Todos los locales</option>
                    {locals.map((local) => (
                    <option key={local.id} value={local.id}>
                    {local.name}
                    </option>
                    ))}
                  </select>
                       
          </div><div>
          </div>
          </div>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Listado de platos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {dishes.map((dish) => (
            <div key={dish.id} className="group relative">
              <img
                alt={dish.name}
                src={"https://media.gettyimages.com/id/2022469376/es/vector/icono-de-plato-tenedor-y-cuchillo-con-trazo-editable.jpg?s=612x612&w=gi&k=20&c=9POvkSyh0igPo3M5GX5iz6_D0OPAPxe4zotLZWr_P-A="} //IA
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/DetallePlato/${dish.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {dish.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{dish.city}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>)
}


export default ListadoPlatosComponents;