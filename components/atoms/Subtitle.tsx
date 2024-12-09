"use client";

import React, { ReactNode } from 'react';

interface SubtitleProps {
  children: ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => <h3>{children}</h3>;
export default Subtitle;
