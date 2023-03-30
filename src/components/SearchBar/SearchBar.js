import FetchPictures from "PicturesApi"
import css from "../../styles.module.css"


const SearchBar = () => {

const data = FetchPictures().then(res => JSON.stringify(res))
console.log(data)

  return(
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.Button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
    />
      </form>
    </header>
    </>
  )
}

export default SearchBar
