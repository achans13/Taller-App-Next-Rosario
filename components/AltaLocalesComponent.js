'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react';
import { postLocal } from '../api/api';

const AltaLocalComponent = () => {
    const [name , setName] = useState("");
    const [type , setType] = useState("");
    const [priceRange , setPriceRange] = useState("");
    const [city , setCity] = useState("");
    const [zone , setZone] = useState("");
    const [address , setAddress] = useState("");
    const [hours , setHours] = useState("");
    const [photo , setPhoto] = useState("");
    const [photos , setPhotos] = useState([]);


    const handleClick = async (e) => {
        e.preventDefault();
        await postLocal(name, type, priceRange, city, zone, address, hours, photos)
    }

    const handleAddPhoto = (e) => {
        e.preventDefault();
        setPhotos((prev) => [...prev , photo]);
        setPhoto("");
    }


    return(
         <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Alta de Local
      </h1>
      <p className="text-gray-500 mb-8">
        Agrega tu restaurante o local gastronómico
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">City</label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Zone</label>
          <input
            type="text"
            onChange={(e) => setZone(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Address</label>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">Hours</label>
          <input
            type="text"
            onChange={(e) => setHours(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Price Range</label>
          <select
            onChange={(e) => setPriceRange(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          >
            <option value={"ECONOMICO"}>Economico</option>
            <option value={"MEDIO"}>Medio</option>
            <option value={"ALTO"}>Alto</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">Type</label>
          <select
            onChange={(e) => setType(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          >
            <option value={"CAFETERIA"}>Cafeteria</option>
            <option value={"RESTAURANTE"}>Restaurante</option>
            <option value={"BAR"}>Bar</option>
            <option value={"FOOD_TRUCK"}>Food Truck</option>
            <option value={"OTROS"}>Otros</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="md:col-span-2 flex gap-4">
          <button
            type="submit"
            onClick={handleAddPhoto}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
          >
            Add Photo
          </button>
        </div>
        <div className="md:col-span-2 grid grid-cols-3 gap-4">
          {photos.map((p) => (
            <img
              key={p}
              src={p}
              className="h-24 w-full object-cover rounded-lg border"
            />
          ))}
        </div>
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            onClick={handleClick}
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-500"
          >
            Crear Local
          </button>
        </div>
      </form>
    </div>
  </div>
);
}

export default AltaLocalComponent;