import "./CreditCard.css";
import VisaLogo from "../../assets/images/visa.png";
import MasterLogo from "../../assets/images/master-card.png"

function CreditCard (props) {
    const bgColor = props.bgColor;
    const textColor = props.color;
    let imgSrc;
    if (props.type === "Visa") {
        imgSrc = VisaLogo;
    } else if (props.type === "Master Card") {
        imgSrc = MasterLogo;
    }

    return (
        <div style={{backgroundColor: bgColor, color: textColor}} className="creditCard">
            <img src={imgSrc} alt="logo"/>
            <h1>**** **** **** {props.number.slice(-4)}</h1>
            <p><scan>Expires {props.expirationMonth}/{props.expirationYear}</scan><scan className="bank">{props.bank}</scan></p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;