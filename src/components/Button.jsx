import getRandomArray from "../utils/getRandomArray";
import phrases from "../utils/phrases.json";

const Button = ({ setRandomPhrase, setBgRandom }) => {

  const handleChangePhrase = () => {
    setRandomPhrase(getRandomArray(phrases))
    setBgRandom(getRandomArray([1, 2, 3, 4]))
  }


  return (
    <button className="App__btn"
    onClick={handleChangePhrase}>Probar mi suerte
    </button>
  )
}

export default Button