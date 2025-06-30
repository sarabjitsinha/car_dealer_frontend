import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MetaTags from "../components/MetaTags";

export default function CarDetail() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get("/api/cars").then((res) => {
      const found = res.data.find((c) => c.slug === slug);
      setCar(found);
    });
  }, [slug]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <MetaTags title={`${car.name} - Used Car`} description={car.description} car={car} />
      <h1 className="text-2xl font-bold">{car.name}</h1>
      <p>{car.description}</p>
      <img src={car.image} alt={car.name} className="mt-4 w-full max-w-md" />
      <p className="font-bold">₹ {car.price}</p>
    </div>
  );
}
