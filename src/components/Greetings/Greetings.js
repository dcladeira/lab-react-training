import "./Greetings.css"

// Constantes devem ser criadas fora do componente para evitar que
// sejam recriadas a cada vez que o componente é renderizado.
const greetingsDict = {
    de: "Hello",
    en: "Hallo",
    es: "Hola",
    fr: "Bonjour"
}

function Greetings(props) {
    return (
        <div className="greetings">
            <p>{greetingsDict[props.lang]} {props.children}</p>
        </div>
    )
}

export default Greetings;