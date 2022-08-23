import Button from "../Button/Button";
import ImageContainer from "../ImageContainer/ImageContainer";
import Popup from "../Popup/Popup";
import Loader from "../Loader/Loader";
import { imageApi } from "../../utils/ImageApi";
import "./Main.css";
import { useState, useEffect } from "react";

function Main() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    imageApi.getPictures().then((res) => {
      setImages(res);
      setPage(2);
    });
  }, []);

  const loadImage = () => {
    imageApi.getPictures(page).then((res) => {
      setImages(images.concat(res));
      setPage(page + 1);
    });
  };

  return (
    <div className='main'>
      <Button clickHandler={loadImage} />
      <ImageContainer images={images} />
      <Popup />
      <Loader />
    </div>
  );
}

export default Main;
