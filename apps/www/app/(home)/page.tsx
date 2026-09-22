'use client';
import React from 'react';
import ShowCasePage from './showcase';

const HomePage = () => {
  return (
    <div className="w-full">
      <ShowCasePage showcase={false} />
    </div>
  );
};

export default HomePage;
