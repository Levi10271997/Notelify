import React from 'react';
import { FaHome, FaUser, FaCog, FaQuestion } from 'react-icons/fa';

const LocalIcons = ({ iconName }) => {
  switch (iconName) {
    case 'home':
      return <FaHome />;
    case 'user':
      return <FaUser />;
    case 'settings':
      return <FaCog />;
    default:
      return <FaQuestion />; // fallback icon
  }
};

export default LocalIcons;
