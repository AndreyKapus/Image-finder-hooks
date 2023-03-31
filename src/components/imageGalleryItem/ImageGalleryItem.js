import { StyledImg } from "./galleryItem.styled"

const ImageGalleryItem = ({pic}) => {
  return (
    <StyledImg>
      {pic && pic.hits.map(pic =>
      <li key={pic.id}>
        <img src={pic.webformatURL} alt={pic.photo} style={{width:"300px", height:'200px'}}/>
      </li>)}
    </StyledImg>
  )
}

export default ImageGalleryItem
