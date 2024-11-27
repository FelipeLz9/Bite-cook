"use client";

import React from 'react';
import { ProfileForm } from '../organisms/ProfileForm';

/* eslint-disable @typescript-eslint/no-unused-vars */

// Añade la prop onLogout
interface ProfileTemplateProps {
  onLogout: () => void;
}

export const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ onLogout }) => {
  return (
    <div className="profile-template">
      <ProfileForm />
    </div>
  );
};
