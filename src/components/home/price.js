import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import OrderButton from "../order";

const Price = props => (
    <StaticQuery
        query={graphql`
        query {
          packaging: file(relativePath: { eq: "viet_noodle/packaging.png" }) {
            ...fullWidthImage
          }
          header: file(relativePath: { eq: "viet_noodle/hero_img_2.png" }) {
            ...fullWidthImage
          }
        }
      `}
        render={data => (
            <section className="no-mb price section container full-width gradient">
                <Img
                    fluid={data.header.childImageSharp.fluid}
                    style={{
                        width: '90%',
                        maxWidth: 500,
                        position: 'absolute',
                        left: '50%',
                        bottom: 0,
                        transform: 'translate(-60%,10%)'
                    }}
                />
                <div className="container content center" style={{ paddingBottom: 64 }}>
                    <Img
                        fluid={data.packaging.childImageSharp.fluid}
                        className="packaging"
                    />
                    <h1>สั่งซื้อได้แล้ววันนี้</h1>
                    <div className="row col-has-padding" style={{ marginBottom: 56 }}>
                        <div className="col col-3">
                            <div className="alpha rounded">
                                <h5>1 ห่อ</h5>
                                <h1 className="no-mb">35</h1>
                                <p>บาท</p>
                            </div>
                        </div>
                        <div className="col col-3">
                            <div className="alpha rounded larger highlight">
                                <div className="badge red">คุ้มสุดๆ</div>
                                <h5>3 ห่อ</h5>
                                <h1 className="no-mb">100</h1>
                                <p>บาท</p>
                            </div>
                        </div>
                        <div className="col col-3">
                            <div className="alpha rounded">
                                <h5>10 ห่อ</h5>
                                <h1 className="no-mb">300</h1>
                                <p>บาท</p>
                            </div>
                        </div>
                        <div className="col col-3">
                            <div className="alpha rounded">
                                <h5>20 ห่อ</h5>
                                <h1 className="no-mb">600</h1>
                                <p>บาท</p>
                            </div>
                        </div>
                    </div>
                    <OrderButton />
                </div>
            </section>
        )}
    />
);

export default Price;