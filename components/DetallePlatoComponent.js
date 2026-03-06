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
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {dish.name}
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                {dish?.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <h1 className="pt-6 text-gray-700">
                    <Link href={`/Perfil/${dish.creatorId}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {dish.creator?.name}
                    </Link>
                  </h1>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={"https://media.gettyimages.com/id/2022469376/es/vector/icono-de-plato-tenedor-y-cuchillo-con-trazo-editable.jpg?s=612x612&w=gi&k=20&c=9POvkSyh0igPo3M5GX5iz6_D0OPAPxe4zotLZWr_P-A="}
            width={2432}
            height={1442}
            className="w-3xl rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
    {dish && dish.id && <> 
    <PlatoRating dish={dish} setIsPosted={setIsPosted}/>
    <ListadoRatingDish reviews={dish.reviews}/> </>}
  </>
  )
}