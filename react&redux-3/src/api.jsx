import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID oKTfddFOySUS_ON6xlTF3CdngrKri0SL4dsI3TO0bi0",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
