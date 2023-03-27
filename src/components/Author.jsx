
const Author = ({ phraseRandom }) => {
    return (
        <div>
            <p className="App__by"><span>Fuente: </span>{phraseRandom.author}.</p>
        </div>
    )
}

export default Author