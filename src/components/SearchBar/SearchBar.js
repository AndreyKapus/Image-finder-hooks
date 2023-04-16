
import React, { useState } from "react"
import css from "../../styles.module.css"


const SearchBar = ({onSubmit}) => {
  const [pictureName, setPictureName] = useState('')

  const handleInputChange = e => {
    setPictureName(e.currentTarget.value.toLowerCase())
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if(pictureName.trim() === '') {
       alert("введите имя картинки")
       return
    };
      onSubmit(pictureName)
      setPictureName(pictureName)
  }

    return(
      <>
        <header className={css.Searchbar}>
          <form className={css.SearchForm}
            onSubmit={handleSubmit}
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
            value={pictureName}
            onChange={handleInputChange}
      />
        </form>
      </header>
      </>
    )
  }




export default SearchBar
