import ImageContainer from '../ImageContainer/ImageContainer';
import Popup from '../Popup/Popup';
import Loader from '../Loader/Loader';
import { imageApi } from '../../utils/ImageApi';
import './Main.css';
import { useState, useEffect } from 'react';

function Main() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    imageApi.getPictures().then((res) => {
      setImages(res);
      setIsLoading(false);
    });
  }, []);

  const loadImage = () => {
    setIsLoading(true);
    imageApi.getPictures(page).then((res) => {
      setImages(images.concat(res));
      setPage(page + 1);
      setIsLoading(false);
    });
  };

  return (
    <div className='main'>
      <button className='button-load' onClick={loadImage}>
        Загрузить картинки
      </button>
      <ImageContainer images={images} setCurrentImage={setCurrentImage} />
      <Popup image={currentImage} setCurrentImage={setCurrentImage} />
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default Main;
