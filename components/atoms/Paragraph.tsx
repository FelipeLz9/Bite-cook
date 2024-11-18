import React, { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => <p>{children}</p>;
export default Paragraph;
