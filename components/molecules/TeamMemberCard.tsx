"use client";

import React from 'react';
import Image from '../atoms/Image';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, role }) => (
  <div className="team-member-card">
    <Image src={image} alt={name} />
    <Subtitle>{name}</Subtitle>
    <Paragraph>{role}</Paragraph>
  </div>
);
export default TeamMemberCard;
