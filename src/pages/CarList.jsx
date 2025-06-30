import axios from "axios";
import { Link } from "react-router-dom";
import CarCard from "../Components/CarCard";
import { useQuery } from "@tanstack/react-query";

const baseURL = import.meta.env.VITE_API_URL;

export default function CarList() {

  async function getdata() {
 const res=await axios.get(`${baseURL}/api/cars`)
    return res.data
  }

const {data:cars,isError,isLoading}=useQuery({
  queryKey:["cars"],
  queryFn:getdata
})
if(isError)
  return <p>Failed to load car</p>
if(isLoading)
  return <div>Loading....</div>  


  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars?.map((car) => (
        <Link key={car._id} to={`/cars/${car.slug}`}>
          <CarCard car={car} />
        </Link>
      ))}
    </div>
  );
}
