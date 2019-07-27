import React from "react"

class ContactForm extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        spam: ""
    }
    spamStyle = {
        position: 'absolute',
        pointerEvents: 'none',
        borderColor: 'transparent'
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        const {
            name,
            email,
            phone,
            subject,
            message,
            spam
        } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <InputField value={spam} onChange={e => this.setState({ spam: e.target.value })} label="Name" name="name" />
                <InputField value={name} onChange={e => this.setState({ name: e.target.value })} label="Full Name" name="fullname" />
                <InputField value={email} onChange={e => this.setState({ email: e.target.value })} type="email" label="Email" name="email" />
                <InputField value={phone} onChange={e => this.setState({ phone: e.target.value })} label="Phone" name="phone" />
                <InputField value={subject} onChange={e => this.setState({ subject: e.target.value })} label="Subject" name="subject" />
                <Textarea value={message} onChange={e => this.setState({ message: e.target.value })} label="Message" name="message" />
                <div className="center">
                    <button type="submit">ส่งข้อความ</button>
                </div>
            </form>
        )
    }
}

export default ContactForm;

const InputField = ({ value, onChange, label, placeholder, type, name, className, style }) => (
    <div className={`field ${className}`} style={style}>
        <label className="label">{label}</label>
        <input
            className="input"
            type={type ? type : "text"}
            placeholder={placeholder ? placeholder : label}
            onChange={onChange}
            value={value}
            name={name}
        />
    </div>
)

const Textarea = ({ value, onChange, label, placeholder, type, name, className, style }) => (
    <div className={`field ${className}`} style={style}>
        <label className="label">{label}</label>
        <textarea
            className="input textarea"
            type={type}
            placeholder={placeholder ? placeholder : label}
            onChange={onChange}
            value={value}
            name={name}
        />
    </div>
)