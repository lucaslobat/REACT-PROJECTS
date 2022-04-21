import "./Form.css";

function Form() {
  return (
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

      <button className="form-button">
        Get a new meme image
        <span role="img" aria-label="painting">
          🎨
        </span>
      </button>
    </form>
  );
}

export default Form;
