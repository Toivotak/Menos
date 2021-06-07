import PropTypes from 'prop-types'

const Header = ({ title }) => {

    return (
        <header className="header">
            <div className="moon-left" />
            <div className="star-left"><div id="star-inner-left"/></div>
            <h1>{title}</h1>
            <div className="star-right"><div id="star-inner-right"/></div>
            <div className="moon-right"/>
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