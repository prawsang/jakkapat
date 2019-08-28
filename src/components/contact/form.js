import React from "react"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactForm extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        message: "",
        spam: "",
        error: false,
        showSuccess: false,
        showError: false
    }
    handleSubmit = e => {
        e.preventDefault();
        const { name, email, phone, message, spam} = this.state;
        if ( spam === "" ) {
            if ( name === "" || email === "" || phone === "" || message === "") {
              this.setState({ error: true })
            } else {
              this.setState({ error: false })
              // Make request
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...this.state })
              })
                .then(() => {
                    this.setState({ 
                        showSuccess: true,
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                        error: false
                    })
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ showError: true })
                });
            }
        }
    }

    render() {
        const {
            name,
            email,
            phone,
            message,
            spam,
            error,
            showSuccess,
            showError
        } = this.state;
        return (
            <form 
                name="contact" 
                onSubmit={this.handleSubmit} 
                className="is-relative" 
                data-netlify="true"
                data-netlify-honeypot="website"
                action="/"
            >
                <div className={`snippet accent-bg field ${showSuccess || "is-hidden"}`} style={{ zIndex: 99 }}>
                    <p className="no-mb">ขอบคุณที่ติดต่อเรา เราจะดำเนินการตอบกลับโดยเร็วที่สุด</p>
                </div>
                <div className={`snippet danger-bg field ${showError || "is-hidden"}`} style={{ zIndex: 99 }}>
                    <p className="no-mb">ขออภัย เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง</p>
                </div>
                {/* honeypot */}
                <div className="field field-1">
                    <label className="label">Website</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Website"
                        onChange={e => this.setState({ spam: e.target.value })}
                        value={spam}
                        name="website"
                        tabindex="-1"
                        autocomplete="off"
                    />
                </div>
                <InputField 
                    value={name} 
                    onChange={e => this.setState({ name: e.target.value })} 
                    label="ชื่อ" 
                    name="name" 
                    danger={error&&name===""}
                />
                <InputField 
                    value={email} 
                    onChange={e => this.setState({ email: e.target.value })} 
                    type="email" 
                    label="อีเมล" 
                    name="email" 
                    danger={error&&email===""}
                />
                <InputField 
                    value={phone} 
                    onChange={e => this.setState({ phone: e.target.value })} 
                    label="เบอร์โทรติดต่อ" name="phone" 
                    danger={error&&phone===""}
                />
                <Textarea 
                    value={message} 
                    onChange={e => this.setState({ message: e.target.value })} 
                    label="ข้อความ" 
                    name="message" 
                    danger={error&&message===""}
                />
                <p className={ `${error ? "" : "is-hidden"} bold danger`}>กรุณากรอกข้อมูลให้ครบถ้วน</p>
                <div className="center">
                    <button type="submit">ส่งข้อความ</button>
                </div>
            </form>
        )
    }
}

export default ContactForm;


const InputField = ({ value, onChange, label, placeholder, type, name, className, danger }) => (
    <div className={`field ${className}`}>
        <label className={`label ${danger ? "danger bold" : ""}`}>{label}</label>
        <input
            className={`input ${danger ? "danger" : ""}`}
            type={type ? type : "text"}
            placeholder={placeholder ? placeholder : label}
            onChange={onChange}
            value={value}
            name={name}
        />
    </div>
  )
  
  const Textarea = ({ value, onChange, label, placeholder, type, name, className, danger }) => (
    <div className={`field ${className}`}>
        <label className={`label ${danger ? "danger bold" : ""}`}>{label}</label>
        <textarea
            className={`input textarea ${danger ? "danger" : ""}`}
            type={type}
            placeholder={placeholder ? placeholder : label}
            onChange={onChange}
            value={value}
            name={name}
        />
    </div>
  )