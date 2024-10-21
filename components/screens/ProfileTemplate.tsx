import React from 'react';
import { ProfileForm } from '../organisms/ProfileForm';



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
