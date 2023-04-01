
import React from "react"
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";
import { Blocks } from "react-loader-spinner";
import { LoaderWrapper } from "components/Loader/Loader";

const API_KEY = '29432159-064ba5645d6ae7f18ff2bb6d2';
const BASE_URL = 'https://pixabay.com/api/'

class ImageGallery extends React.Component {
  state = {
    picture: null,
    loading: false,
    error: null,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.picture;
    const nextName = this.props.picture;

    if (prevName !== nextName) {
      this.setState({loading: true})
      const pictureName = this.props.picture;

        fetch(`${BASE_URL}?q=${pictureName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
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
  render() {

    return (
      <div>
          {this.state.error && <h2>{this.state.error.massege}</h2>}
          {this.state.picture && this.state.picture.hits.length === 0 && <h2>pictures not found</h2>}
          {this.state.loading ? <LoaderWrapper><Blocks/></LoaderWrapper> : <ImageGalleryItem pic={this.state.picture}/>}
      </div>
    )
  }

}

export default ImageGallery
