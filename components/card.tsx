import React from 'react';
import Image from 'next/image'


interface Label {
  label: string;
  value: string;
}

interface CustomCardProps {
  avatarSrc?: string;
  username: string;
  projectName: string;
  projectDescription: string;
  labels?: Label[];
  logoSrc: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  avatarSrc,
  username,
  projectName,
  projectDescription,
  labels,
  logoSrc,
}) => {
  return (
    <div className="border rounded p-4 bg-white font-mono pt-10 px-6 w-[50vw] h-fit">
      <div className="flex items-center">
        <Image className="rounded-full bg-gray-100 mr-3" src={avatarSrc} alt="User Avatar" />
        <span className='text-xl'>{username}</span>
      </div>
      <h2 className="mt-3 text-lg font-semibold">{projectName}</h2>
      <p className="text-sm mt-1">{projectDescription}</p>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {labels && labels.map((label, index) => (
          <div className='grid gap-2 mt-3' key={index}>
            <strong>{label.label}:</strong> {label.value}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-3">
        <img src={logoSrc} alt="Logo" className="w-6 h-6 mr-2" />
        <span className="text-xs font-semibold">Voucher</span>
      </div>
    </div>
  );
};

export default CustomCard;
