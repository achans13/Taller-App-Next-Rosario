'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState , useEffect } from 'react'
import { postLocal } from '../api/api';
import { postDish } from '../api/api';

const AltaPlatoComponent = () => {
    const [name , setName] = useState("");
    const [category , setCategory] = useState("");
    const [localId , setLocalId] = useState("");
    const [city , setCity] = useState("");
    const [price , setPrice] = useState("");
    const [description , setDescription] = useState("");
    const [locales, setLocales] = useState([]);
    const [localSeleccionado, setLocalSeleccionado] = useState("");


    const handleClick = async (e) => {
        e.preventDefault();
        await postDish(name, category, localId, city, price, description)
    }

    useEffect(() => {
    fetch("https://api-react-taller-production.up.railway.app/api/locals")
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    setLocales(data.items);})
}, []);

    // const handleAddPhoto = (e) => {
    //     e.preventDefault();
    //     setPhotos((prev) => [...prev , photo]);
    //     setPhoto("");
    // }


    return(
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Alta de Plato
      </h1>
      <p className="text-gray-500 mb-8">
        Agrega un nuevo plato a tu local
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Nombre del plato
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Categoría
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          >
            <option value={"ENTRADA"}>Entrada</option>
            <option value={"PRINCIPAL"}>Principal</option>
            <option value={"POSTRE"}>Postre</option>
            <option value={"BEBIDA"}>Bebida</option>
            <option value={"OTROS"}>Otros</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">
            Local
          </label>
          <select
            onChange={(e) => setLocalId(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          >
            <option value="">Seleccione un local</option>
            {Array.isArray(locales) &&
              locales.map((local) => (
                <option key={local.id} value={local.id}>
                  {local.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Ciudad
          </label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Precio
          </label>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">
            Descripción
          </label>
          <textarea
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            onClick={handleClick}
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-500"
          >
            Crear Plato
          </button>
        </div>
      </form>
    </div>
  </div>
    );

}

export default AltaPlatoComponent;