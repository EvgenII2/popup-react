import "./ImageContainer.css";
import Image from "../Image/Image";

function ImageContainer({ images }) {
  return (
    <section className='images-container'>
      {images.map((image) => (
        <Image image={image} key={image.id} />
      ))}
    </section>
  );
}

export default ImageContainer;
