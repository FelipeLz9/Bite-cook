"use client";

import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/recetas">Recetas</a></li>
        <li><a href="/pedidos">Pedidos</a></li>
        <li><a href="/perfil">Configuración</a></li>
      </ul>
      <button className="logout-button" onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Sidebar;
