
import React from "react"
import ImageGalleryItem from "components/imageGalleryItem/ImageGalleryItem";
import { Blocks } from "react-loader-spinner";
import { LoaderWrapper } from "components/Loader/Loader";
import Button from "components/Button/Button";
import FetchApi from "components/FetachApi/FetchApi";

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
      const page = this.state.page

      FetchApi(pictureName, page).then(data => this.setState({picture: data}))
          .catch(error => this.setState({error}))
         .finally(() => this.setState({loading: false}))
    }
   }

   handleLoadMore = (e) => {
    const pictureName = this.state.page;
    const page = this.state.page
    this.setState(prevState => ({
      page: prevState.page + 1
    })
    )
    FetchApi(pictureName, page).then(data => this.setState(prevState => ({
      picture: {...prevState, ...data}
    })))
          .catch(error => this.setState({error}))
         .finally(() => this.setState({loading: false}))
   }

  render() {
    const {error, picture, loading} = this.state
    return (

      <div>
          {error && <h2>{error.massege}</h2>}
          {picture && picture.hits.length === 0 && <h2>pictures not found</h2>}
          {loading ? <LoaderWrapper><Blocks/></LoaderWrapper> : <ImageGalleryItem pic={picture}/>}
          {picture && picture.hits.length > 0 && <Button loadMore={this.handleLoadMore}
          />}
      </div>
    )
  }

}

export default ImageGallery
