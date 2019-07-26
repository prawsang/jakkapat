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
                    className="is-absolute center x-center bottom neg-b-32"
                    style={{
                        width: '90%',
                        maxWidth: 500,
                        transform: 'translateX(-58%)'
                    }}
                />
                <div className="container content center" style={{ paddingBottom: 64 }}>
                    <Img
                        fluid={data.packaging.childImageSharp.fluid}
                        style={{ maxWidth: 200 }}
                        className="image is-relative neg-t-64 neg-mb-40"
                    />
                    <h1 className="has-text-shadow" style={{ marginBottom: 40 }}>สั่งซื้อได้แล้ววันนี้</h1>
                    <div className="row col-has-padding small-padding has-text-shadow width-90-xs" style={{ margin: 'auto auto 56' }}>
                        <div className="col col-3">
                            <div className="alpha rounded">
                                <h5>1 ห่อ</h5>
                                <h1 className="no-mb">35</h1>
                                <p>บาท</p>
                            </div>
                        </div>
                        <div className="col col-3">
                            <div className="alpha rounded larger highlight is-relative">
                                <div className="badge text normal red corner no-text-shadow">คุ้มสุดๆ</div>
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