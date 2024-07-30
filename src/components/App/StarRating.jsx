import { MdOutlineStar } from "react-icons/md";

const StarRating = ({ rating, maxRating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <MdOutlineStar
      size={14}
        key={i} 
        className={i <= rating ? 'text-yellow-500' : 'text-gray-300'} 
      />
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;