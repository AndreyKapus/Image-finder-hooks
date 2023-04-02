const API_KEY = '29432159-064ba5645d6ae7f18ff2bb6d2';
const BASE_URL = 'https://pixabay.com/api/'

const FetchApi = (pictureName, page) => {

return fetch(`${BASE_URL}?q=${pictureName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
  .then(response => {
    if(response.ok) {
      return response.json()
    }
    return Promise.reject(
      new Error("нет таких картинок")
    )
   })
}

export default FetchApi
