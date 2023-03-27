
const Phrase = ({ phraseRandom }) => {
    return (
        <div className="content__phrase">
            <p className="phrase">{phraseRandom.phrase} <span>❞</span></p>
        </div>
    )
}

export default Phrase