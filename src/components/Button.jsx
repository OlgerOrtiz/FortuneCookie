import getRandomArray from "../utils/getRandomArray";
import phrases from "../utils/phrases.json";

const Button = ({ setRandomPhrase, setBgRandom, bgs }) => {

  const handleChangePhrase = () => {
    setRandomPhrase(getRandomArray(phrases))
    setBgRandom(getRandomArray(bgs))
  }


  return (
    <button className="App__btn"
    onClick={handleChangePhrase}>Probar mi suerte
    </button>
  )
}

export default Button