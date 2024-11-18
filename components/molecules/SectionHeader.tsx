import React from 'react';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
  <div className="section-header">
    <Title>{title}</Title>
    <Paragraph>{description}</Paragraph>
  </div>
);
export default SectionHeader;
