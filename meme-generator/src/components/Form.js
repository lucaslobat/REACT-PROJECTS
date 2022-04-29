import "./Form.css";
import { useState } from "react";
import data from "./data";

function Form() {
  //Inicializa el estado con un objeto
  const [memeObject, setMemeUrl] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // Estado con el array de objetos de meme.
  const [allMemeImages, setAllMemeImages] = useState(data.data.memes);

  function handleButtonClick(e) {
    e.preventDefault();
    //Genera numero aleatório de 0 a 100;
    const randomNum = Math.floor(Math.random() * 100);

    /*Utiliza la función de estado para cambiar el valor de memeURL
    con el valor del randomNum pasado a la variable memes*/
    setMemeUrl((prevState) => {
      return { ...prevState, randomImage: allMemeImages[randomNum].url };
    });
  }

  return (
    <>
      <form className="flex form" action="">
        <div className="flex inputs">
          <input
            className="input-text"
            type="text"
            placeholder="Top text"
          ></input>
          <input
            className="input-text"
            type="text"
            placeholder="Bottom text"
          ></input>
        </div>

        <button onClick={handleButtonClick} className="form-button">
          Get a new meme image
          <span role="img" aria-label="painting">
            🎨
          </span>
        </button>
      </form>
      <div className="flex image-container">
        <img
          alt="meme"
          className="meme-image"
          src={memeObject.randomImage}
        ></img>
      </div>
    </>
  );
}

export default Form;
