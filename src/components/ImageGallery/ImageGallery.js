
import React from "react"
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";
import { Blocks } from "react-loader-spinner";
import { LoaderWrapper } from "components/Loader/Loader";
import Button from "components/Button/Button";

const API_KEY = '29432159-064ba5645d6ae7f18ff2bb6d2';
const BASE_URL = 'https://pixabay.com/api/'

class ImageGallery extends React.Component {
  state = {
    picture: null,
    loading: false,
    error: null,
    page: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.picture;
    const nextName = this.props.picture;

    if (prevName !== nextName) {
      this.setState({loading: true})
      const pictureName = this.props.picture;

        fetch(`${BASE_URL}?q=${pictureName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if(response.ok) {
            return response.json()
          }
          return Promise.reject(
            new Error("нет таких картинок")
          )
         }).then(data => this.setState({picture: data}))
          .catch(error => this.setState({error}))
         .finally(() => this.setState({loading: false}))
    }
   }

   handleLoadMore = (e) => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
   }

  render() {
    const {error, picture, loading} = this.state
    return (

      <div>
          {error && <h2>{error.massege}</h2>}
          {picture && picture.hits.length === 0 && <h2>pictures not found</h2>}
          {loading ? <LoaderWrapper><Blocks/></LoaderWrapper> : <ImageGalleryItem pic={picture}/>}
          {picture && picture.hits.length > 0 && <Button loadMore={this.handleLoadMore}/>}
      </div>
    )
  }

}

export default ImageGallery
