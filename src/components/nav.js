import React from "react"
import LogoLight from "../assets/logo_light.svg"
import LogoDark from "../assets/logo_dark.svg"

const Nav = ({ transparent }) => {
    return (
        <nav className={transparent ? "transparent" : ""}>
            <div className="container">
                <div className="logo">
                    {transparent ? <LogoLight /> : <LogoDark />}
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