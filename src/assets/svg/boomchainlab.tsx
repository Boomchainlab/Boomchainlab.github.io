// src/assets/svg/boomchainlab.tsx

import React from 'react';

const BoomchainlabIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}  // Allows for customizable props like className, style, etc.
  >
    <circle 
      cx="50" 
      cy="50" 
      r="45" 
      stroke="currentColor" 
      strokeWidth={props.strokeWidth || 10}  // Customizable stroke width, default is 10
      fill="none" 
    />
    <path d="M30 50h40v10H30z" fill="currentColor" />
    <path 
      d="M50 30v40" 
      stroke="currentColor" 
      strokeWidth={props.strokeWidth || 10}  // Customizable stroke width for vertical line
      strokeLinecap="round" 
    />
  </svg>
);

export default BoomchainlabIcon;
