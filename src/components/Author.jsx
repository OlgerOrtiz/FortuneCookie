
const Author = ({ phraseRandom }) => {
    return (
        <div>
            <p className="App__author"><span>Fuente: </span>{phraseRandom.author}.</p>
        </div>
    )
}

export default Author