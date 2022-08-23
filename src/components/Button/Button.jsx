import "./Button.css";

function Button({ clickHandler }) {
  function onClick(event) {
    clickHandler(event);
  }

  return (
    <button className='button-load' onClick={onClick}>
      Загрузить картинки
    </button>
  );
}

export default Button;
