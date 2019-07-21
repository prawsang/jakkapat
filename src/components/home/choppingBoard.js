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
    state = {
        scroll: 0,
        top: 0,
        pageHeight: 0,
        scale: 1
    }
    componentDidMount() {
        this.setState({
            top: ReactDOM.findDOMNode(this).getBoundingClientRect().top,
            pageHeight: window.screen.availHeight
        });
        this.listenToScroll = this.listenToScroll.bind(this);
        window.addEventListener('scroll', this.listenToScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll() {
        const pagePosition = window.pageYOffset;
        const scroll = pagePosition - this.state.top;
        const maxScroll = 4 * this.state.pageHeight - 1;
        if (scroll < maxScroll) {
            if (scroll > 0) {
                this.setState({
                    scroll,
                    scale: (scroll * -0.1) / maxScroll + 1
                })
            } else {
                this.setState({ scroll: 0 })
            }
            this.changeLights();
        }
    }
    changeLights() {
        const { scroll, pageHeight } = this.state;
        const phase = Math.floor(((scroll + pageHeight - 1) / pageHeight));
        return "phase-" + (phase <= 4 ? phase : 4)
    }
    render() {
        return (
            <div className={`sticky-image-wrapper center chopping-board-image-wrapper ${this.changeLights()}`} style={{ transform: `rotateZ(10deg) scale(${this.state.scale})` }}>
                <Image name="choppingBoard" className="chopping-board-image image" />
                <div className="light-circle light-1" />
                <div className="light-circle light-2" />
                <div className="light-circle light-3" />
                <div className="light-circle light-4" />
                <div className="light-circle light-5" />
                <div className="light-circle light-6" />
            </div>
        )
    }
}

export default ChoppingBoard;