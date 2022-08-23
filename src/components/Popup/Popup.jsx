import './Popup.css';

function Popup({ image }) {
  return (
    image && (
      <div>
        <figure className='image-popup__image-container'>
          <img
            className='image-popup__image'
            src={image.download_url}
            alt={image.author}
          />
          <figcaption className='image-popup__caption'>
            Автор: <address className='image-popup__author'></address>
          </figcaption>
        </figure>
        <a
          className='image-popup__link image-popup__link_open'
          href={image.url}
          target='_blank'
        >
          Открыть в полном размере
        </a>
      </div>
    )
  );
}

export default Popup;
