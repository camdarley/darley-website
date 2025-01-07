import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function LinkItem({ path, image, alt, hover }) {
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const isCurrentPath = location.pathname === path;

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

  return (
    <Link to={path} className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={(isHovered || isCurrentPath) && hover ? hover : image} alt={alt} />
    </Link>
  );
}

LinkItem.propTypes = {
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hover: PropTypes.string,
};