'use client'


import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState , useEffect } from 'react'
import { getLocal, getLocals } from '../api/api'
import { getDish, getDishes} from '../api/api'
import PlatoRating from './PlatoRating'
import { useParams } from 'next/navigation'
import ListadoRatingDish from './ListadoRatingDish'
import Link from 'next/link'

export default function DetallePlatoComponent() {
    const params = useParams();
    const [local, setLocal] = useState({});
    const [dish ,setDish] = useState({})
    const [isPosted, setIsPosted] = useState(false);
    const features = [
  {
    name: 'City',
    description: dish.city,
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Category',
    description: dish.category,
    icon: LockClosedIcon,
  },
  {
    name: 'Price',
    description: dish.price,
    icon: ServerIcon,
  },
]

    // useEffect(() => {
    //     const fetchLocal = async () => {
    //         const data = await getLocal(params.id);
    //         console.log(data);
    //         setLocal(data.item);
    //     }

    //     fetchLocal();
    // },[isPosted])

    useEffect(() => {
        const fetchDish = async () => {
            const data = await getDish(params.id);
            console.log(data);
            setDish(data.item);
        }

        fetchDish();
    },[isPosted])

  return (
    <>
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div>
            <img
              src="https://media.gettyimages.com/id/2022469376/es/vector/icono-de-plato-tenedor-y-cuchillo-con-trazo-editable.jpg?s=612x612&w=gi&k=20&c=9POvkSyh0igPo3M5GX5iz6_D0OPAPxe4zotLZWr_P-A="
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {dish.name}
              </h1>
              <p className="text-gray-600 mb-6">
                {dish?.description}
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
                  href={`/Perfil/${dish.creatorId}`}
                  className="ml-2 text-indigo-600 hover:underline font-semibold"
                >
                  {dish.creator?.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {dish && dish.id && (
      <>
        <PlatoRating dish={dish} setIsPosted={setIsPosted} />
        <ListadoRatingDish reviews={dish.reviews} />
      </>
    )}
  </>
  )
}