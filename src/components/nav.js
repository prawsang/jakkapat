import React from "react"
import logoLight from "../assets/logo_light.svg"
import logoDark from "../assets/logo_dark.svg"

const Nav = ({ transparent }) => {
    return (
        <nav className={transparent ? "transparent" : ""}>
            <div className="container">
                <div className="logo">
                    <img src={transparent ? logoLight : logoDark} alt="logo" />
                </div>
                <ul>
                    <li><a>หน้าหลัก</a></li>
                    <li><a>ติดต่อเรา</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav