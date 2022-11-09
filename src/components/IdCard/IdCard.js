import "./IdCard.css";

function IdCard() {
    const cardArray = [
        {
            lastName: 'Doe',
            firstName: 'John',
            gender: 'male',
            height: 178,
            birth: new Date("1992-07-14"),
            picture: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
            lastName: 'Delores',
            firstName: 'Obrien',
            gender:'female',
            height: 172,
            birth: new Date("1988-05-11"),
            picture: "https://randomuser.me/api/portraits/women/44.jpg"
        }
    ]

    const cards = cardArray.map((card, index) => {
        return (
            <section className="idCard" key={index}>
                <img src={card.picture} alt=""/>
                <section className="data">
                    <p><scan className="dataDescription">First name: </scan><scan>{card.firstName}</scan></p>
                    <p><scan className="dataDescription">Last name: </scan><scan>{card.lastName}</scan></p>
                    <p><scan className="dataDescription">Gender: </scan><scan>{card.gender}</scan></p>
                    <p><scan className="dataDescription">Height: </scan><scan>{card.height/100}m</scan></p>
                    <p><scan className="dataDescription">Birth: </scan><scan>{card.birth.toDateString()}</scan></p>
                </section>
            </section>
        )
    })
    return (
        <div>
            {cards}
        </div>)
}

export default IdCard;