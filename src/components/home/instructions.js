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
        return (
            <section style={{ paddingTop: 88, paddingBottom: 88 }}>
                <div className="container narrow white no-overflow has-padding" style={{ paddingTop: 64, paddingBottom: 64 }}>
                    <div className="content center">
                        <h1>ปรุงเองที่บ้านง่าย ๆ</h1>
                        <ul className="tabs">
                            <li className="tab-item active">ปรุงด้วยการต้ม</li>
                            <li className="tab-item">ปรุงด้วยไมโครเวฟ</li>
                        </ul>
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
                    </div>
                </div>
            </section>
        );
    }
}

export default Instructions;

const InstItem = ({ image, order, children, last }) => (
    <div className={`row recipe-item col-has-padding`}>
        <div className="col col-2">
            <div className="badge">{order}</div>
        </div>
        <div className="col col-8">
            <p className="larger">
                {children}
            </p>
        </div>
        <div className="col col-2">
            <img src={image} className="image" alt="" style={{ maxWidth: 112 }} />
        </div>
    </div >
);