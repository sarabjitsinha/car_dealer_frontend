import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CarCard from "../Components/CarCard";

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("/api/cars").then((res) => setCars(res.data));
  }, []);

  console.log(cars)
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
