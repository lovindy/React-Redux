import React from "react";

const Card = (props) => {
  const { title, handle, image } = props;
  return (
    <div className="bg-white px-2 py-2 shadow-2xl rounded-lg">
      <img src={image} />
      <div className="text-center">
        <p>Title is {title}</p>
        <p>Handle is {handle}</p>
      </div>
    </div>
  );
};

export default Card;
