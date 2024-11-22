"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from '../atoms/Image';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const StorySection: React.FC = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleJoinUsClick = () => {
    if (isClient) {
      router.push('/register');
    }
  };

  return (
    <section className="story-section">
      <Image src="https://leanimprovements.es/wp-content/uploads/2021/03/buen-equipo-de-desarrollo-de-producto.png" alt="Our Story Image" />
      <div className="story-content">
        <Title>Our Story</Title>
        <Paragraph>
          TasteMasters was born out of our love for good food and great company. In 2015, we set out
          to create a company that would make it easy for people to enjoy delicious, home-cooked meals.
          Since then, we’ve been on a mission to help you create memorable meals, share them with your loved ones,
          and savor the experience.
        </Paragraph>
        <Button text="Join us" onClick={handleJoinUsClick} />
      </div>
    </section>
  );
};

export default StorySection;
