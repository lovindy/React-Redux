import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import SearchImages from "./api";
import ImageList from "./components/imageList";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSumbit = async (term) => {
    const result = await SearchImages(term); // wait unitil the promise is resolved.
    // then execute the rest of the code.
    setImages(result);
  };
  return (
    <div className="w-full mx-auto mt-20 space-y-12">
      <SearchBar onSubmit={handleSumbit} />
      <ImageList image={images}/>
    </div>
  );
};

export default App;
