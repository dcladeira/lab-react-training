import "./Random.css";

function Random(props) {
    const randomNumber = Math.ceil(Math.random()*(props.max - props.min));
    return (
        <div className="container">
            <p>Random value between {props.min} and {props.max} => {randomNumber}</p>
        </div>
    )
}

export default Random;