import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CarForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    year: "",
    price: "",
    description: "",
    slug: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("image", image);

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post("/api/cars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Car added successfully!");
      navigate("/cars");
    } catch (err) {
      console.error(err);
      alert("Failed to add car");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow space-y-4">
      <h2 className="text-2xl font-bold mb-4">Add New Car</h2>

      <input
        type="text"
        name="name"
        placeholder="Car Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="slug"
        placeholder="Unique Slug (e.g. thar-2022)"
        value={form.slug}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="number"
        name="year"
        placeholder="Year"
        value={form.year}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price (e.g. 850000)"
        value={form.price}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        rows="3"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Add Car"}
      </button>
    </form>
  );
}
