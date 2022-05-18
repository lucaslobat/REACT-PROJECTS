import "./Form.css";
import { useState, useEffect } from "react";

function Form() {
  //Inicializa el estado con un objeto de 3 propiedades
  const [memeObject, setMemeObject] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // Estado con el array de objetos de meme recibido del import de "data".
  const [allMemes, setAllMemes] = useState({});

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleButtonClick(e) {
    e.preventDefault();
    //Genera numero aleatório de 0 a 100;
    const randomNum = Math.floor(Math.random() * 100);

    setMemeObject((prevArray) => {
      return { ...prevArray, topText: "", bottomText: "" };
    });

    /*Utiliza la función de estado para cambiar el valor de memeObject;
    Lo que hace es usar spread en sus propiedades y luego reasignar
    el valor de la propiedad randomImage al valor de la url de un
    elemento random del array allMemeImages.*/
    setMemeObject((prevState) => {
      return { ...prevState, randomImage: allMemes[randomNum].url };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setMemeObject((prevState) => {
      return { ...prevState, [name]: value };
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
            name="topText"
            onChange={handleChange}
            value={memeObject.topText}
          />

          <input
            className="input-text"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            onChange={handleChange}
            value={memeObject.bottomText}
          />
        </div>

        <button onClick={handleButtonClick} className="form-button">
          Get a new meme image
          <span role="img" aria-label="painting">
            🎨
          </span>
        </button>
      </form>
      <div className="flex image-container">
        <img alt="meme" className="meme-image" src={memeObject.randomImage} />
        <h1 className="meme--text top">{memeObject.topText}</h1>
        <h1 className="meme--text bottom">{memeObject.bottomText}</h1>
      </div>
    </>
  );
}

export default Form;
