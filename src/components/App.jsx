import React from "react";
import SearchBar from "./SearchBar";

export class App extends React.Component {
  state = {
    pictures: []
  };

  handleFormSubmit = pictureName => {
    console.log(pictureName)
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit}/>
      </div>
    );
  }
};
