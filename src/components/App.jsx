import React from "react";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";

export class App extends React.Component {
  state = {
    pictures: [],
    picturesName: '',
    showModal: false,
  };

  handleFormSubmit = pictureName => {
    this.setState({picturesName: pictureName})
  };

  togleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))
  }

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
