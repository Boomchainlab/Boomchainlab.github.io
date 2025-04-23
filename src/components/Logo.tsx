// src/components/Logo.tsx
import React from 'react';
import BoomchainlabIcon from '../assets/svg/boomchainlab';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      {/* You can customize the size and stroke width here */}
      <BoomchainlabIcon width="120" height="120" strokeWidth={5} />
      <h1>Welcome to BoomchainLab</h1>
    </div>
  );
};

export default Logo;
