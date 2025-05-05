import React from 'react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 40 }) => {
  return (
    <img 
      src="/images/logo.jpeg" 
      alt="ShieldX360 Logo" 
      width={size} 
      height={size} 
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;
