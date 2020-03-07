import React, { Component } from 'react'
import PropTypes from 'prop-types';
class Button extends Component {
    render() {
        const { backgroundColor, text, onClick } = this.props;

        return (
            <div>
                <button style={{ backgroundColor }}
                        onClick={onClick}>{text}</button>
            </div>
        )
    }
}











Button.defaultProps = {
    backgroundColor: 'teal',
    text: 'no text',
    onClick: () => { console.log('do nothing') }
}

Button.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button;
