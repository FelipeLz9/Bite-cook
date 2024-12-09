"use client";

import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => <h2>{children}</h2>;
export default Title;
