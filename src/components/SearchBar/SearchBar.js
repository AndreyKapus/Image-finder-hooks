// import FetchPictures from "PicturesApi"
import React from "react"
import css from "../../styles.module.css"


class SearchBar extends React.Component {
  state = {
    pictureName: '',
  };

  handleInputChange = e => {
    this.setState({pictureName: e.currentTarget.value.toLowerCase()})
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.pictureName.trim() === '') {
      alert("введите имя картинки")
      return
    }
    this.props.onSubmit(this.state.pictureName)

    this.setState({ pictureName: '' })
  }

  render() {
    return(
      <>
        <header className={css.Searchbar}>
          <form className={css.SearchForm}
            onSubmit={this.handleSubmit}
          >
            <button type="submit" className={css.Button}>
              <span className={css.buttonLabel}>Search</span>
            </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.pictureName}
            onChange={this.handleInputChange}
      />
        </form>
      </header>
      </>
    )
  }


}

export default SearchBar
