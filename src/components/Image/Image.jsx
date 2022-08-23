import './Image.css';
import { getCropImage } from '../../utils/ImageApi';

function Image({ image, setCurrentImage }) {
  return (
    <a
      href={image.url}
      key={image.id}
      className='image-card__link'
      onClick={setCurrentImage(image)}
    >
      <img
        className='image-card__image'
        src={getCropImage(image.download_url, 5)}
        alt='text'
      />
    </a>
  );
}

export default Image;
