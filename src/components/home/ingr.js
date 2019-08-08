import React from "react"
import ChoppingBoard from "./choppingBoard"
import Observer from '@researchgate/react-intersection-observer';

class Ingredients extends React.Component {
    state = {
        phase: 0,
    }
    handleChange = (event) => {
        const id = event.target.id;
        if (event.isIntersecting) {
            switch (id) {
                case "page-1": this.setState({ phase: 1}); break;
                case "page-2": this.setState({ phase: 2}); break;
                case "page-3": this.setState({ phase: 3}); break;
                case "page-4": this.setState({ phase: 4}); break;
                default: this.setState({ phase: 0 })
            }
        }
    }
    render() {
        const { phase } = this.state;
        return (
            <section className="section">
                <div className="ingr-viet-noodle">
                    <div className="container content">
                        <div className="section center"><h1>ในซองมีอะไรบ้าง ?</h1></div>
                        <div className="row row-xxs is-relative is-ai-stretch is-jc-space-between sticky-scroll">
                            <ChoppingBoard phase={phase} scale="1"/>
                            <div className="col-6 col-has-padding smaller-xs is-relative">
                                <Observer onChange={this.handleChange} >
                                    <div style={{ height: '30vh' }}/>
                                </Observer>
                                <div className="page">
                                    <Observer onChange={this.handleChange} >
                                        <div className="texture-1 masked" id="page-1">
                                            <h1 style={{ color: 'white' }}>ผงปรุงน้ำซุป</h1>
                                            <h3 className="p masked-item">ผงปรุงน้ำซุปสกัดจากน้ำต้มกระดูก หมู รสน้ำซุปหวานน้ำต้มกระดูกหมู  กลมกล่อม หอมและเผ็ดร้อนด้วย พริกไทยดำ</h3>
                                        </div>
                                    </Observer>
                                </div>
                                <div className="page">
                                    <Observer onChange={this.handleChange}>
                                        <div className="texture-1 masked" id="page-2">
                                            <h1 style={{ color: 'white' }}>เส้นสด</h1>
                                            <h3 className="p masked-item">เส้นสดจากอุบลแท้ เหนียวนุ่ม</h3>
                                        </div>
                                    </Observer>
                                </div>
                                <div className="page">
                                    <Observer onChange={this.handleChange}>
                                        <div id="page-3">
                                            <h1>หอมเจียวและพริกผัด</h1>
                                        </div>
                                    </Observer>
                                </div>
                                <div className="page">
                                    <Observer onChange={this.handleChange}>
                                        <div id="page-4">
                                            <h3>เพื่อเพิ่มความอร่อยและคุณค่าทางโภชนาการ</h3>
                                            <h6 className="p">สามารถเติมผักและเนื้อสัตว์ต่าง ๆ เช่น ผักชีใบเลื่อย และหมูยอ</h6>
                                        </div>
                                    </Observer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Ingredients;