import { useEffect, useState } from "react";
import axios from "axios";
import CarForm from "../components/CarForm";

const baseURL = import.meta.env.VITE_API_URL;

export default function Admin() {
  const [cars, setCars] = useState([]);
  const token = localStorage.getItem("token");


  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const res = await axios.get(`${baseURL}/api/cars`);
    setCars(res.data);
  };

  const deleteCar = async (id) => {
    await axios.delete(`${baseURL}/api/cars/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchCars();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Add a New Car</h1>
      <CarForm onSuccess={fetchCars} />
      <h2 className="text-lg mt-6 mb-2">All Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car._id} className="flex justify-between items-center border p-2 mb-2">
            {car.name}
            <button onClick={() => deleteCar(car._id)} className="bg-red-500 text-white px-2 py-1">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
