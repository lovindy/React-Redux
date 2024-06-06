import React from "react";
import ImageShow from "./imageShow";

const imageList = ({ image }) => {
  const renderedImages = image.map((image, index) => {
    return (
      <div>
        <ImageShow key={index} image={image} />
      </div>
    );
  });
  return <div className="grid grid-cols-3 max-w-screen-lg gap-4 mx-auto">{renderedImages}</div>;
};

export default imageList;
