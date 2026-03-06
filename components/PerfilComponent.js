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
<div className="bg-white py-24 sm:py-32">
   <div className="mx-auto max-w-7xl px-6 lg:px-8">

     <ul role="list" className="">
       <li>
         <div className="flex items-center ">
           <img
             alt="Foto perfil"
             src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
             className="size-16 rounded-full outline-1 outline-offset-1 outline-black/5 "
           />
           <div>
             <h3 className="text-base/7 font-semibold mx-6 tracking-tight text-gray-900">{user.name}</h3>
             <p className="text-sm/6 font-semibold mx-6 text-indigo-600">{user.username}</p>
           </div>
         </div>
       </li>
     </ul>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> 
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Listado de {user.name}</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {locals.map((local) => (
            <div key={local.id} className="group relative">
              <img
                alt={local.name}
                src={local.photos?.[0] || "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/01/restaurantes-lomas-chapultepec-aitana.jpg?fit=1280%2C1280&ssl=1"} //IA
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/DetalleLocal/${local.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {local.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{local.city}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{local.priceRange}</p>
              </div>
            </div>
          ))}
        </div>
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
   </div>
 </div> 
 
    )
}
