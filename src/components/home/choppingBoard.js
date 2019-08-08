import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Observer from '@researchgate/react-intersection-observer';
import ReactDOM from "react-dom";

const Image = ({ name, className, style }) => (
    <StaticQuery
        query={graphql`
        query {
          choppingBoard: file(relativePath: { eq: "viet_noodle/chopping_board_dark.png" }) {
            ...fullWidthImage
          }
        }
      `}
        render={data => (
            <Img
                fluid={data[name].childImageSharp.fluid}
                className={className}
                style={style}
            />
        )}
    />
)

class ChoppingBoard extends React.Component {
    state = {
        pageHeight: 0,
        top: 0,
        scale: 1
    }
    toggleScaling = event => {
        if (event.isIntersecting) {
            this.setState({
                top: ReactDOM.findDOMNode(this).getBoundingClientRect().top,
                pageHeight: document.documentElement.clientHeight,
            });
            this.listenToScroll = this.listenToScroll.bind(this);
            window.addEventListener('scroll', this.listenToScroll);
            this.updateDimensions = this.updateDimensions.bind(this);
            window.addEventListener('resize', this.updateDimensions);
        } else {
            window.removeEventListener('scroll', this.listenToScroll)
            window.removeEventListener("resize", this.updateDimensions);
        }
    }
    updateDimensions() {
        this.setState({
            top: ReactDOM.findDOMNode(this).getBoundingClientRect().top + window.pageYOffset,
            pageHeight: document.documentElement.clientHeight
        });
    }
    listenToScroll() {
        const pagePosition = window.pageYOffset;
        const scroll = pagePosition - this.state.top;
        const maxScroll = 4 * this.state.pageHeight - 1;
        if (scroll < maxScroll && scroll > 0) {
            this.setState({
                scale: (scroll * -0.1) / maxScroll + 1
            })
        }
    }
    render() {
        const { phase } = this.props;
        const { scale } = this.state;
        const options = {
            onChange: this.toggleScaling,
            threshold:[0,1]
        }
        return (
            <Observer {...options}>
            <div
                className="col-6 col-has-padding chopping-board-scroll"
            >
                <div className="chopping-board">
                        <div
                        className={`sticky-image-wrapper center chopping-board-image-wrapper phase-${phase}`}
                        >
                            <div style={{ transform: `scale(${scale})`, fontSize: '50%' }}>
                                <Image 
                                    name="choppingBoard" 
                                    className="chopping-board-image image"
                                />
                                <div className="light-circle light-1" />
                                <div className="light-circle light-2" />
                                <div className="light-circle light-3" />
                                <div className="light-circle light-4" />
                                <div className="light-circle light-5" />
                                <div className="light-circle light-6" />
                            </div>
                        </div>
                </div>
            </div>
            </Observer>
        )
    }
}

export default ChoppingBoard;