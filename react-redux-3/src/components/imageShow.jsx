import React from "react";

const imageShow = ({ image }) => {
  return (
    <div>
      <img
        className="w-[300px] h-[300px] object-cover border-2 border-black shadow-2xl rounded-xl"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default imageShow;
