import "./BoxColor.css";
// style is most often used in React applications to add dynamically-computed styles at render time.

function BoxColor(props) {
    function colorToHex(color) {
        const hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }
    function convertRgbtoHex(red, green, blue) {
        return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
    }
    const colorHex = convertRgbtoHex(props.r, props.g, props.b);
    return (
        <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}} className="divStyle">
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{colorHex}</p>
        </div>
    )
}

export default BoxColor;