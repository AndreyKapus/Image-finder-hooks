
import React, { useEffect, useState } from "react"
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";
import { Blocks } from "react-loader-spinner";
import { LoaderWrapper } from "components/Loader/Loader";
import Button from "components/Button/Button";
import FetchApi from "components/FetachApi/FetchApi";

const  ImageGallery = ({pictureName, openModal}) => {

  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if(!pictureName) {
      return;
    }
    setLoading(true);

    FetchApi(pictureName, page).then(picture => setPicture(picture))
    .catch(error => setError(error))
   .finally(() => setLoading(false))

  }, [pictureName, page])

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

    return (

      <div>
          {error && <h2>{error.massege}</h2>}
          {picture && picture.hits.length === 0 && <h2>pictures not found</h2>}
          {loading ? <LoaderWrapper><Blocks/></LoaderWrapper> : <ImageGalleryItem pic={picture} openModal={openModal}/>}
          {picture && picture.hits.length > 0 && <Button loadMore={handleLoadMore}
          />}
      </div>
    )
  }



export default ImageGallery
