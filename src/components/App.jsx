import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";

export const App = () => {
  // const [pictures, setPictures] = useState([]);
  const [pictureName, setPicturesName] = useState('');
  // const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = pictureName => {
    setPicturesName(pictureName)
  };

  // const togleModal = () => {
  //   setShowModal(({showModal}) => ({
  //     showModal: !showModal,
  //   }))
  // }

    return (
      <div>
        <SearchBar onSubmit={handleFormSubmit}/>
        <ImageGallery picture={pictureName}/>

      </div>
    );
  }

