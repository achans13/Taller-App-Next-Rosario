'use client'


import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState , useEffect } from 'react'
import { getLocal, getLocals } from '../api/api'
import RestaurantRating from './RestaurantRating'
import { useParams } from 'next/navigation'
import ListadoRating from './ListadoRating'
import Link from 'next/link'

export default function DetalleLocalComponent() {
    const params = useParams();
    const [local, setLocal] = useState({});
    const [isPosted, setIsPosted] = useState(false);
    const features = [
  {
    name: 'City',
    description: local.city,
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Zone',
    description: local.zone,
    icon: LockClosedIcon,
  },
  {
    name: 'Address',
    description: local.address,
    icon: ServerIcon,
  },
]

    useEffect(() => {
        const fetchLocal = async () => {
            const data = await getLocal(params.id);
            console.log(data);
            setLocal(data.item);
        }

        fetchLocal();
    },[isPosted])

  return (
    <>
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div>
            <img
              src={
                local.photos
                  ? local.photos[0]
                  : "https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
              }
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {local.name}
              </h1>
              <p className="text-gray-600 mb-6">
                {local?.description}
              </p>
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700 font-medium">
                      {feature.name}:
                    </span>
                    <span className="text-gray-600">
                      {feature.description}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <span className="text-gray-500 text-sm">
                  Creado por
                </span>
                <Link
                  href={`/Perfil/${local.creatorId}`}
                  className="ml-2 text-indigo-600 hover:underline font-semibold"
                >
                  {local.creator?.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {local && local.id &&
     (
      <>
        <RestaurantRating local={local} setIsPosted={setIsPosted} />
        <ListadoRating reviews={local.reviews} />
      </>
    )}
  </>)
}
