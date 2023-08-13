import React from 'react';
import Image from 'next/image';

interface BadgeProps {
    imageURL: string;
  altText: string;
}

const Badge: React.FC<BadgeProps> = ({ imageURL, altText }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-18 h-18 rounded-ful"
      >
        <div className="rounded-full overflow-hidden w-12 h-12 border-4 border-white">
          <Image src={imageURL} alt={altText} layout="responsive" width={10} height={10}/>
        </div>
      </div>
    </div>
  );
};

export default Badge;