import "./ImageContainer.css";
import Image from "../Image/Image";

function ImageContainer({ images }) {
  return (
    <section className='images-container'>
      {images.map((image, index) => (
        <Image image={image} key={image.id + index} />
      ))}
    </section>
  );
}

export default ImageContainer;
