import React from "react";
// Udemy's code editor is a little weird...
// We do *not* need an 'import {useState}' line

function ImageList({ images }) {
  const [selectedName, setSelectedName] = useState("");

  const handleClick = (name) => {
    setSelectedName(name);
  };

  const renderedImages = images.map((image, index) => {
    // The editor might say there is a syntax error with the next line.
    // There is no error!
    return (
      <img
        key={image.id}
        src={image.src}
        onClick={() => handleClick(image.name)}
        alt={image.name}
      />
    );
  });

  return (
    <div>
      <h1>Image name: {selectedName}</h1>
      <div>{renderedImages}</div>
    </div>
  );
}

const useState = React.useState;
// Don't change the export
export { ImageList };
