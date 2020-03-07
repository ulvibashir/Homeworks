import React, { Component } from 'react'

class Modal extends Component {
    render() {
        const { header, closeButton, text, actions, onClick } = this.props;

        return (
         
                <div className="modal-window">
                    <div className="header-div">
                        <p>{header}</p>
                        {closeButton && <button onClick={onClick}>X</button>}
                    </div>

                    <p>{text}</p>
                    <div className="model-btn-div">
                        {actions.map((item) => item)}
                    </div>
                </div>
         

        )
    }
}
export default Modal;