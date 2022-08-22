import Button from "../Button/Button";
import ImageContainer from "../ImageContainer/ImageContainer";
import Popup from "../Popup/Popup";
import Loader from "../Loader/Loader";
import { imageApi } from "../../utils/ImageApi";
import "./Main.css";
import { useState, useEffect } from "react";

function Main() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    imageApi.getPictures().then((res) => {
      console.log(res);
      setImages(res);
    });
  }, []);

  return (
    <div className='main'>
      <Button />
      <ImageContainer images={images} />
      <Popup />
      <Loader />
    </div>
  );
}

export default Main;
