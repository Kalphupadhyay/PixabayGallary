import React, { useState, useEffect } from "react";
import Card from "./components/imageCard";
import Search from "./components/ImageSearch";

const App = (props) => {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto my-10">
      <Search searchText={(text) => setTerm(text)} />

      {!isloading && images.length === 0 && (
        <h1 className="text-4xl text-center mx-auto">NO images found</h1>
      )}

      {isloading ? (
        <h1 className="text-6xl text-center mx-auto">Page loading</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => {
            return (
              <Card
                key={image.id}
                image={image}
                views={image.views}
                name={image}
                download={image.downloads}
                likes={image.likes}
                user={image.user}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
