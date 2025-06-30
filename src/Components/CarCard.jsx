export default function CarCard({ car }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-xl font-semibold">{car.name}</h3>
      <p className="text-gray-600">{car.year} • ₹{car.price}</p>
    </div>
  );
}
