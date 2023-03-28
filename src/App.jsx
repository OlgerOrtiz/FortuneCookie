
import './App.css'
import Button from './components/Button'
import Phrase from './components/Phrase'
import phrases from "./utils/phrases.json";
import getRandomArray from './utils/getRandomArray';
import { useState } from "react";
import Author from './components/Author';

const bgs = [1, 2, 3, 4];

function App() {
const [phraseRandom, setRandomPhrase] = 
useState(getRandomArray(phrases));
const [bgRandom, setBgRandom] = useState(getRandomArray(bgs))

const appAtyle = {
  backgroundImage: `url('/backgrounds/bg${bgRandom}.jpg')`
}

  return (
    <div style={appAtyle} className="App">
      <h1 className='App__title'>GALLETA DE LA FORTUNA</h1>
      <Phrase phraseRandom={phraseRandom}/>
      <Button setRandomPhrase={setRandomPhrase} setBgRandom={setBgRandom} bgs={bgs}/>
      <Author phraseRandom={phraseRandom}/>
    </div>
  )
}

export default App
