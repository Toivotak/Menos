import PropTypes from 'prop-types'

const Header = ({ title }) => {

    return (
        <header className="header">
            <div className="moon-left" />
            <h1>{title}</h1>
            <div className="moon-right" />
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