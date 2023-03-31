
import React from "react"
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";

const API_KEY = '29432159-064ba5645d6ae7f18ff2bb6d2';
const BASE_URL = 'https://pixabay.com/api/'

class ImageGallery extends React.Component {
  state = {
    picture: null,
    loading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.picture;
    const nextName = this.props.picture;

    if (prevName !== nextName) {
      this.setState({loading: true})
      const pictureName = this.props.picture;
      fetch(`${BASE_URL}?q=${pictureName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => response.json()).then(data => this.setState({picture: data})).catch(error => console.log(error))
      this.setState({loading: false})
    }

   }
  render() {

    return (
      <div>
          {this.state.loading ? <div>Loading...</div> : <ImageGalleryItem pic={this.state.picture}/>}
      </div>
    )
  }

}

export default ImageGallery
