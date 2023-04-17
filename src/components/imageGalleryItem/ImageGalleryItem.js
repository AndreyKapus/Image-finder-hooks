
import { StyledImg } from "./galleryItem.styled"

const ImageGalleryItem = ({pic, openModal}) => {

  return (
    <StyledImg>
      {pic ? pic.hits.map(pic =>
      <li key={pic.id} >
        <img src={pic.webformatURL} alt={pic.photo} onClick={() => openModal()} style={{width:"300px", height:'200px'}}/>
      </li>) : <div>Please, find pictures</div>}
    </StyledImg>
  )
}

export default ImageGalleryItem
