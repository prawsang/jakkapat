import React from "react"
import ReactDOM from "react-dom"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    // state = {
    //     scroll: 0,
    //     pageHeight: 0,
    //     top: 0,
    //     scale: 1
    // }
    // scroll: how far the element has been scrolled
    // pageHeight: viewport's height
    // top: the element's top comparing to the viewport
    // scale: scaling effect

    // componentDidMount() {
    //     this.setState({
    //         top: ReactDOM.findDOMNode(this).getBoundingClientRect().top,
    //         pageHeight: document.documentElement.clientHeight,
    //     });
    //     this.listenToScroll = this.listenToScroll.bind(this);
    //     window.addEventListener('scroll', this.listenToScroll);

    //     this.updateDimensions = this.updateDimensions.bind(this);
    //     window.addEventListener('resize', this.updateDimensions);
    // }
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.listenToScroll)
    //     window.removeEventListener("resize", this.updateDimensions);
    // }
    // updateDimensions() {
    //     this.setState({
    //         top: ReactDOM.findDOMNode(this).getBoundingClientRect().top + window.pageYOffset,
    //         pageHeight: document.documentElement.clientHeight
    //     });
    // }
    // listenToScroll() {
    //     const pagePosition = window.pageYOffset;
    //     const scroll = pagePosition - this.state.top;
    //     const maxScroll = 4 * this.state.pageHeight - 1;
    //     if (scroll < maxScroll) {
    //         if (scroll > 0) {
    //             this.setState({
    //                 scroll,
    //                 scale: (scroll * -0.1) / maxScroll + 1
    //             })
    //         } else {
    //             this.setState({ scroll: 0 })
    //         }
    //     }
    // }
    // changeLights() {
    //     const { scroll, pageHeight } = this.state;
    //     const phase = Math.ceil((scroll) / pageHeight);
    //     return "phase-" + (phase <= 4 ? phase : 4)
    // }

    render() {

        const { phase, scale } = this.props;

        return (
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
        )
    }
}

export default ChoppingBoard;