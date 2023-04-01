import React from "react";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";

export class App extends React.Component {
  state = {
    pictures: [],
    picturesName: '',
  };

  handleFormSubmit = pictureName => {
    this.setState({picturesName: pictureName})
  };



  render() {
    const pic = this.state.picturesName

    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit}/>
        <ImageGallery picture={pic}/>
      </div>
    );
  }
};
