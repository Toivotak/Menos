import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const Button = ({type, color, text, onClick}) => {
    /*const [count, setCount] = useState(1);

    if (count % 2 === 0){
        color = "orange";
    }

    function f(){
        setCount(count + 1); 
        onClick();
    }
    useEffect(() => {
        //document.title += `${count}`;
    });*/

    return <button 
        type={type}
        onClick={onClick}
        style={{backgroundColor : color}} 
        className="btn"> 
            {text}
        </button>
}

Button.defaultProps = {
    type: "button",
    color: "red",
    text: "Missing",
    onClick: () => (console.log("default onClick"))
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
export default Button
