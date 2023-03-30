const API_KEY = '29432159-064ba5645d6ae7f18ff2bb6d2';
const BASE_URL = 'https://pixabay.com/api/'


 const FetchPictures = () => {
 const data = fetch(`${BASE_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
   response.json()})
   return data;
}

export default FetchPictures



