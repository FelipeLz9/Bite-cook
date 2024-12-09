"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import ProtectedRoute from '@/components/ProtectedRoute';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
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
  
    if (!name || !description || !price || !image) {
      setErrorMessage('All fields are required');
      return;
    }
  
    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      setErrorMessage('Price must be a valid positive number');
      return;
    }
  
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setErrorMessage('User is not authenticated');
        return;
      }
  
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/dishes`,
        { name, description, price: parseFloat(price), image },
        {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        }
      );
  
      setSuccessMessage(response.data.message);
      setErrorMessage("");
      setName("");
      setDescription("");
      setPrice("");
      setImage("");
  
      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    } catch (error: any) {
      console.error('Error al enviar la solicitud:', error);
      setErrorMessage(error.response?.data.message || "Error al agregar el plato");
      setSuccessMessage("");
    }
  };

  const handleClose = () => {
    router.push("/profile");
    window.location.href = "/profile";
  };

  return (
    <ProtectedRoute>
      <div className="admin-container">
        <button className="close-button" onClick={handleClose}>×</button> 
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
    </ProtectedRoute>
  );
};

export default AdminPage;
