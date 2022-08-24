import './Popup.css';

function Popup({ image, setCurrentImage }) {
  const onClick = () => {
    setCurrentImage(null);
  };
  return (
    image && (
      <div className='popup'>
        <button className='popup__button-close' onClick={onClick}>
          &times;
        </button>
        <div className='popup__content'>
          <figure className='popup__image-container'>
            <img
              className='popup__image'
              src={image.download_url}
              alt={image.author}
            />
            <figcaption className='popup__caption'>
              Автор: <address className='popup__author'></address>
            </figcaption>
          </figure>
          <a
            className='popup__link popup__link_open'
            href={image.url}
            rel='noreferrer'
            target='_blank'
          >
            Открыть в полном размере
          </a>
        </div>
      </div>
    )
  );
}

export default Popup;
