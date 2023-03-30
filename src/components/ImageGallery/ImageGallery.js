import FetchPictures from "PicturesApi";
import React from "react"

const API_KEY = '29432159-064ba5645d6ae7f18ff2bb6d2';
const BASE_URL = 'https://pixabay.com/api/'

class ImageGallery extends React.Component {
  state = {
    picture: null,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.picture;
    const nextName = this.props.picture;

    if (prevName !== nextName) {
      const pictureName = this.props.picture;
      fetch(`${BASE_URL}?q=${pictureName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => response.json()).then(data => this.setState({picture: data})).catch(error => console.log(error))
    }

   }
  render() {
  //  FetchPictures(pictureName).then(pic => this.setState({picture: pic}))

    return (
      <div>
          {this.state.picture && this.state.picture.hits.map(pic => <div key={pic.id}>{pic.id}</div>)}
      </div>
    )
  }

}

export default ImageGallery
