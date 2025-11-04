import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faSearch, faGear, faHouse,faTrash, faPlus, faBoxArchive, faTag, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
    case 'gear':
        return <FontAwesomeIcon icon={faGear} />;
    case 'plus':
        return <FontAwesomeIcon icon={faPlus} />;
     case 'trash':
        return <FontAwesomeIcon icon={faTrash} />;
    default:
      return <FontAwesomeIcon icon={faThumbsUp} />; // fallback icon
  }
};

export default LocalIcons;
