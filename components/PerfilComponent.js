'use client'
import { useState, useEffect } from "react";
import { getUser } from "../api/api";
import { useParams } from "next/navigation";
import Link from 'next/link'

export default function PerfilComponent () {
    const params = useParams();
    const [user, setUser] = useState({});
    const [locals, setLocals] = useState([]);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser(params.id);
            console.log(data);
            setUser(data.item);
            setLocals(data.item.locals)
        }

        fetchUser();
    }, [])

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser(params.id);
            console.log(data);
            setUser(data.item);
            setDishes(data.item.dishes)
        }

        fetchUser();
    }, [])

    return (
<div className="bg-gray-100 min-h-screen py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6 mb-12">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {user.name}
          </h1>
          <p className="text-gray-500">
            @{user.username}
          </p>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Locales de {user.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locals.map((local) => (
            <div
              key={local.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={
                  local.photos?.[0] ||
                  "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/01/restaurantes-lomas-chapultepec-aitana.jpg"
                }
                className="h-48 w-full object-cover"
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
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Platos de {user.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src="https://media.gettyimages.com/id/2022469376/es/vector/icono-de-plato-tenedor-y-cuchillo-con-trazo-editable.jpg?s=612x612&w=gi&k=20&c=9POvkSyh0igPo3M5GX5iz6_D0OPAPxe4zotLZWr_P-A="
                className="h-48 w-full object-cover"
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
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                  ${dish.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
    )
}
