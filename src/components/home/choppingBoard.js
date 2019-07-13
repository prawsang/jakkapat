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
        pageHeight: 0
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

        if (scroll > 0) {
            this.setState({ scroll })
        } else {
            this.setState({ scroll: 0 })
        }
        this.changeLights();
    }
    changeLights() {
        const { scroll, pageHeight } = this.state;
        const phase = Math.floor(((scroll + pageHeight - 1) / pageHeight));
        return "phase-" + (phase <= 4 ? phase : 4)
    }
    render() {
        return (
            <div className={`chopping-board-image-wrapper ${this.changeLights()}`}>
                {/* <div className="chopping-board-image-wrapper"> */}
                <Image name="choppingBoard" className="chopping-board-image" />
                <div className="light-circle light-1" />
                <div className="light-circle light-2" />
            </div>
        )
    }
}

export default ChoppingBoard;