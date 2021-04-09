import PropTypes from 'prop-types'
import Button from './Button'

const Form = ({type}) => {
    if (type == "person"){
        return (
            <form className="form">
                <div className="form-collumn-1">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" className="form-input-text" /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" className="form-input-text" />
                </div>
                <div className="form-collumn-2"></div>
                <div className="form-collumn-3"></div>
                <div className="form-collumn-4">
                    <Button onClick=""/>
                </div>
            </form> 
        )
    }
    if (type == "country"){
        return (
            <form className="form">
                <div className="form-collumn-1">
                    <label htmlFor="cname">Counry name:</label><br />
                    <input type="text" id="cname" name="cname" className="form-input-text" /><br />
                    <label htmlFor="gtype">Goverment type:</label><br />
                    <input type="text" id="gtype" name="gtype" className="form-input-text" /><br />
                </div>
                <div className="form-collumn-2">
                    <label htmlFor="cname">Population:</label><br />
                    <input type="text" id="cname" name="cname" className="form-input-text" /><br />
                    <label htmlFor="gtype">Culture:</label><br />
                    <input type="text" id="gtype" name="gtype" className="form-input-text" /><br />
                </div>
                <div className="form-collumn-3"></div>
                <div className="form-collumn-4">
                    <Button />
                </div>
            </form> 
        )
    }
    return (
        <form>
            <label>Invalid form</label><br />
        </form> 
    )
}

Form.defaultProps = {
    type: "person"
}

export default Form;