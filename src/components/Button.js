import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const Button = ({type, color, text, onClick}) => {
    const [count, setCount] = useState(1);
    let btns = document.getElementsByClassName("btn");
    if (count % 71 === 0){
        color = "orange";
    }

    useEffect(() => {
        document.title += `${count}`;
    });

    return <button 
        type={type}
        onClick={onClick, () => setCount(count + 1)}
        style={{backgroundColor : color}} 
        className="btn"> 
            {text}
        </button>
}

Button.defaultProps = {
    type: "button",
    color: "red",
    text: "Missing"
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
