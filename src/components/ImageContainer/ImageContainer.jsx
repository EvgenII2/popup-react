import './ImageContainer.css';
import Image from '../Image/Image';

function ImageContainer({ images, setCurrentImage }) {
  return (
    <section className='images-container'>
      {images.map((image, index) => (
        <Image
          image={image}
          key={image.id + index}
          setCurrentImage={setCurrentImage}
        />
      ))}
    </section>
  );
}

export default ImageContainer;
