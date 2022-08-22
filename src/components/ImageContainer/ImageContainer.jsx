import "./ImageContainer.css";

function ImageContainer({ images }) {
  return (
    <div className='image-container'>
      <ul className='results'>
        {images.map((image) => (
          <li key={image.id} className='image'>
            <img src={image.url} alt='text' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageContainer;
