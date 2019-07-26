import React from "react"
import Logo from "../assets/logo_dark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
    <footer>
        <div className="container content is-flex is-jc-space-between">
            <div>
                <Logo style={{ width: 120, height: 'auto', marginBottom: 8 }} />
                <p className="gray no-mb smaller">หสม.ไทยฟู๊ดซัพพลาย <br />
                    98 ซ.ประชาราษฎร์ 3 แยก 1 ถ.ประชาราษฎร์ <br />
                    ต.ตลาดขวัญ อ.เมือง จ.นนทบุรี  <br />
                    11000 ประเทศไทย <br /><br />
                    โทร 02-526-5480
                </p>
            </div>
            <div className="right" style={{ whiteSpace: 'nowrap' }}>
                <p style={{ marginBottom: 16 }}>ติดตามเรา</p>
                <a href="https://www.facebook.com/jakkapat.thaifood/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} className="icon fb" /></a>
            </div>
        </div>
    </footer>
)

export default Footer;