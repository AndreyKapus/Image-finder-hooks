import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";
import PicModal from "Modal/Modal";

export const App = () => {
  const [pictureName, setPicturesName] = useState('');

  const handleFormSubmit = pictureName => {
    setPicturesName(pictureName)
  };

    return (
      <div>
        <SearchBar onSubmit={handleFormSubmit}/>
        <ImageGallery pictureName={pictureName}/>
        <PicModal/>
      </div>
    );
  }

