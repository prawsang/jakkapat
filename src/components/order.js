import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLine,
    faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons"

class OrderButton extends React.Component {
    state = {
        showPopUp: false
    }
    render() {
        const { showPopUp } = this.state;
        return (
            <div className={`popup-wrapper up ${showPopUp ? "active" : ""} `}>
                <div className="dismiss" onClick={() => this.setState({ showPopUp: false })} />
                <button className="larger" onClick={() => this.setState({ showPopUp: !showPopUp })} style={{ padding: '0.75em 2em' }}>
                    สั่งซื้อ
                </button>
                <div className="popup">
                    <div className="order popup-content is-flex content">
                        <a className="social fb center" href="https://www.facebook.com/jakkapat.thaifood/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                            <small>@jakkapat.thaifood</small>
                        </a>
                        <a className="social line center" href="https://line.me/R/ti/p/%40jakkapat" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLine} className="icon" />
                            <small>@jakkapat</small>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderButton;