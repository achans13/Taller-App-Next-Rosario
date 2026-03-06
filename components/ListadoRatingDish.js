
import { Rating } from "@material-tailwind/react";
const ListadoRatingDish = ({reviews}) => {

    
    console.log(reviews);
return(
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Reseñas
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Conoce las reseñas de otros usuarios
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {reviews?.map((review) => (
            <li key={review.id}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <Rating value={review.rating} readonly/>
                  <p className="text-sm/6 font-semibold text-indigo-600">{review.comment}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
)
}

export default ListadoRatingDish