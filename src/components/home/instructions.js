import React from "react"
import image1 from "../../assets/viet_noodle/instructions_1.png"
import image2 from "../../assets/viet_noodle/instructions_2.png"
import image3 from "../../assets/viet_noodle/instructions_3.png"
import image4 from "../../assets/viet_noodle/instructions_4.png"

class Instructions extends React.Component {
    state = {
        type: 0,
    }
    render() {
        const { type } = this.state;
        return (
            <section className="section">
                <div className="container narrow white no-overflow has-padding" style={{ paddingTop: 64, paddingBottom: 64 }}>
                    <div className="content center">
                        <h1>ปรุงเองที่บ้านง่าย ๆ</h1>
                        <ul className="tabs">
                            <li className={`tab-item ${type === 0 ? 'active' : ''}`} onClick={() => this.setState({ type: 0 })}>ปรุงด้วยการต้ม</li>
                            <li className={`tab-item ${type === 1 ? 'active' : ''}`} onClick={() => this.setState({ type: 1 })}>ปรุงด้วยไมโครเวฟ</li>
                        </ul>
                        {type === 0 ? (
                            <div className="recipe">
                                <InstItem image={image1} order={1}>
                                    ตวงน้ำ 500-550มล. ใส่ภาชนะ และต้มน้ำให้เดือด
                                </InstItem>
                                <InstItem image={image2} order={2}>
                                    ใส่ผงปรุงรสและเส้นสด (หากไม่ชอบให้น้ำซุปข้น ควรล้างเส้นก่อนใส่เล้น) เพื่อเพิ่มคุณค่าทางโภชนาการ สามารถเติมเนื้อสัตว์ เช่น หมูยอ หมูสับ
                                </InstItem>
                                <InstItem image={image3} order={3}>
                                    ต้มต่อไปอีก 2-3 นาที
                                </InstItem>
                                <InstItem image={image4} order={4} last={true}>
                                    เทใส่ภาชนะ ใส่หอมเจียว พริกผัด และเพื่อเพิ่มความอร่อยสามารถเติมผักต่าง ๆ เช่น ผักชีใบเลื่อย
                                </InstItem>
                            </div>
                        ) : (
                                <div className="recipe">
                                    <InstItem order={1}>
                                        ตวงน้ำ 500-550มล. ใส่ภาชนะ
                                </InstItem>
                                    <InstItem order={2}>
                                        ใส่ผงปรุงรส คนให้เข้ากัน ไม่ให้จับเป็นก่้อน และเพื่อเพิ่มคุณค่าทางโภชนาการ สามารถเติมเนื้อสัตว์ เช่น หมูยอ หมูสับ
                                </InstItem>
                                    <InstItem order={3}>
                                        ใส่เส้น (หากไม่ชอบให้น้ำซุปข้น ควรล้างเส้นก่อนใส่เล้น)
                                </InstItem>
                                    <InstItem order={4} last={true}>
                                        นำเข้าไมโครเวฟเป็นเวลา 5 นาที จากนั้นเติมหอมเจียว พริกผัด และเพื่อเพิ่มคุณค่าทางโภชนาการ สามารถเติมผักอื่นๆ
                                </InstItem>
                                </div>
                            )}
                    </div>
                </div>
            </section>
        );
    }
}

export default Instructions;

const InstItem = ({ image, order, children, last }) => (
    <div
        className={`row recipe-item col-has-padding`}
        data-sal="slide-down"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
    >
        <div className="col col-2 center-xs">
            <div className="badge">{order}</div>
        </div>
        <div className={`col col-${image ? '8' : '10'}`}>
            <p style={{ fontSize: '1.2em' }}>
                {children}
            </p>
        </div>
        {image && (
            <div className="col col-2 center-xs">
                <img src={image} className="image" alt="" style={{ maxWidth: 112 }} />
            </div>
        )}
    </div >
);