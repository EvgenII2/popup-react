import './Loader.css';

function Loader({ isLoading }) {
  return (
    isLoading && (
      <div className='loader'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  );
}

export default Loader;
