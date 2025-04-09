import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ProfileCard = ({ imgSrc, name, title, description }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-2xl p-4">
      <div className="flex flex-col items-start">
        {/* Profile Image with LinkedIn Icon */}
        <div className="relative mb-3">
          <img
            src={imgSrc}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm">
            <FaLinkedin className="text-blue-600 w-4 h-4" />
          </div>
        </div>

        {/* Name & Info */}
        <div className="text-left">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
