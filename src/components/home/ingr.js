import React from "react"
import ChoppingBoard from "./choppingBoard"


class Ingredients extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="ingr-viet-noodle section">
                    <div className="container content">
                        <h1 className="center" style={{ marginBottom: '128px' }}>ในซองมีอะไรบ้าง ?</h1>
                        <div className="row is-ai-stretch is-jc-space-between">
                            <div className="col-6 col-has-padding chopping-board">
                                <ChoppingBoard />
                            </div>
                            <div className="col-6 col-has-padding">
                                <div className="ingr-item texture-1 masked">
                                    <h1 style={{ color: 'white' }}>ผงปรุงน้ำซุป</h1>
                                    <h3 className="p masked-item">ผงปรุงน้ำซุปสกัดจากน้ำต้มกระดูก หมู รสน้ำซุปหวานน้ำต้มกระดูกหมู  กลมกล่อม หอมและเผ็ดร้อนด้วย พริกไทยดำ</h3>
                                </div>
                                <div className="ingr-item texture-1 masked">
                                    <h1 style={{ color: 'white' }}>เส้นสด</h1>
                                    <h3 className="p masked-item">เส้นสดจากอุบลแท้ เหนียวนุ่ม</h3>
                                </div>
                                <div className="ingr-item">
                                    <h1>หอมเจียวและพริกผัด</h1>
                                </div>
                                <div className="ingr-item">
                                    <h3>เพื่อเพิ่มความอร่อยและคุณค่าทางโภชนาการ</h3>
                                    <h6 className="p">สามารถเติมผักและเนื้อสัตว์ต่าง ๆ เช่น ผักชีใบเลื่อย และหมูยอ</h6>
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