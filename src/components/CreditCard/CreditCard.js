import "./CreditCard.css";

function CreditCard (props) {
    const bgColor = props.bgColor;
    const textColor = props.color;
    return (
        <div style={{backgroundColor: bgColor, color: textColor}} className="creditCard">
            <header>{props.type}</header>
            <h1>**** **** **** {props.number.slice(-4)}</h1>
            <p><scan>Expires {props.expirationMonth}/{props.expirationYear}</scan><scan className="bank">{props.bank}</scan></p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;