import React from "react"
import LogoLight from "../assets/logo_light.svg"
import LogoDark from "../assets/logo_dark.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class Nav extends React.Component {
    state = {
        showMenu: false
    }
    render() {
        const { transparent } = this.props;
        const { showMenu } = this.state;
        return (
            <nav className={`${transparent ? "transparent" : ""}  ${showMenu ? "active" : ""}`}>
                <div className="container">
                    <div className="popup-back" onClick={() => this.setState({ showMenu: false })} />
                    <div className="hamburger" onClick={() => this.setState({ showMenu: true })}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className="logo">
                        {transparent ? <LogoLight /> : <LogoDark />}
                    </div>
                    <ul className="nav-menu">
                        <li><a>หน้าหลัก</a></li>
                        <li><a>ติดต่อเรา</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav