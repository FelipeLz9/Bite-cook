"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./page.css";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Enviar la solicitud POST para agregar el plato
      const response = await axios.post("http://localhost:3001/api/dishes", {
        name,
        description,
        price,
        image,
      });

      // Mostrar mensaje de éxito
      setSuccessMessage(response.data.message);
      setErrorMessage("");
      
      // Limpiar los campos
      setName("");
      setDescription("");
      setPrice("");
      setImage("");

      // Redirigir al listado de platos (puedes cambiar esto según lo que necesites)
      setTimeout(() => {
        router.push("/admin"); // Cambia esto a la URL que deseas para redirigir
      }, 2000);
    } catch (error: any) {
      setErrorMessage(error.response?.data.message || "Error al agregar el plato");
      setSuccessMessage("");
    }
  };

  return (
    <div className="admin-container">
      <h1>Add a product</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="e.g., Women's Wool Runners"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="e.g., The world's most comfortable shoes for life on the go."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          placeholder="e.g., 95"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          placeholder="e.g., http://..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Add product</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
};

export default AdminPage;
