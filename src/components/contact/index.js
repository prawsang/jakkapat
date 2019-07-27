import React from "react"
import ContactForm from "./form"

import {
    faLine,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends React.Component {
    state = {
        type: 0
    }
    render() {
        const { type } = this.state;
        return (
            <main className="container narrow content">
                <h1 className="center">ติดต่อเรา</h1>
                <div className="center">
                    <ul className="tabs">
                        <li className={`tab-item ${type === 0 && "active"}`} onClick={() => this.setState({ type: 0 })}>ติดต่อทางเว็บไซต์</li>
                        <li className={`tab-item ${type === 1 && "active"}`} onClick={() => this.setState({ type: 1 })}>ติดต่อทาง LINE</li>
                    </ul>
                </div>
                <section className="section">
                    {type === 0 ? (
                        <ContactForm />
                    ) : (
                            <React.Fragment>
                                <h5>ติดต่อทาง LINE</h5>
                                <p>ท่านสามารถติดต่อเราทาง LINE ได้ที่ <b>@jakkapat</b> (มี @) หรือใช้ปุ่มเพิ่มเพื่อนด้านล่างนี้</p>
                                <button className="line">
                                    <FontAwesomeIcon className="icon" icon={faLine} />
                                    <span>Add Friend</span>
                                </button>
                            </React.Fragment>
                        )}
                </section>
            </main>
        )
    }
}

export default Contact;