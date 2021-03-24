import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log("clikkatu")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "World of Menos",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header