
const Phrase = ({ phraseRandom }) => {
    return (
        <div className="App__content--phrase">
            <p className="phrase">{phraseRandom.phrase} <span>❞</span></p>
        </div>
    )
}

export default Phrase