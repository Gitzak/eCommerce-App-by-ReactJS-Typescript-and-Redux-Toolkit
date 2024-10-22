import React from "react";

// Define the type for props
interface CarouselImageProps {
  text: string;
}

// CarouselImage Component with type annotations
const CarouselImage: React.FC<CarouselImageProps> = ({ text }) => {
  return (
    <div className="carousel-image">
      <img
        className="d-block w-100"
        src={`https://placehold.co/700x200/orange/black`}
        alt={text}
      />
    </div>
  );
};

export default CarouselImage;
