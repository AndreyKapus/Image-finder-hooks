import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";
import PicModal from "Modal/Modal";

export const App = () => {
  const [pictureName, setPicturesName] = useState('');
  const [modalOpen, setOpenModal] = useState(false);

  function openModal() {
    setOpenModal(true);
  }


  function closeModal() {
    setOpenModal(false);
  }

  const handleFormSubmit = pictureName => {
    setPicturesName(pictureName)
  };

    return (
      <div>
        <SearchBar onSubmit={handleFormSubmit}/>
        <ImageGallery pictureName={pictureName} openModal={openModal}/>
        <PicModal openModal={openModal} closeModal={closeModal} modalOpen={modalOpen}/>
      </div>
    );
  }

