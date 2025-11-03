import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faSearch, faHouse, faBoxArchive, faTag, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const LocalIcons = ({ iconName }) => {
  switch (iconName) {
    case 'home':
      return  <FontAwesomeIcon icon={faHouse} />;
    case 'archive':
      return  <FontAwesomeIcon icon={faBoxArchive} />;
    case 'tag':
      return <FontAwesomeIcon icon={faTag} />;
    case 'chevronRight':
        return <FontAwesomeIcon icon={faChevronRight} />;
    case 'search':
        return <FontAwesomeIcon icon={faSearch} />;
    default:
      return <FontAwesomeIcon icon={faThumbsUp} />; // fallback icon
  }
};

export default LocalIcons;
