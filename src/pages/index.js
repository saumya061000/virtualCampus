import React from "react"
import HomeDesktop from "../components/home/HomeDesktop";
import HomeMobile from "../components/home/HomeMobile";
import {withOrientationChange, isBrowser, isMobile, isTablet} from "react-device-detect";
import {withStyles} from "@material-ui/core/styles";
import myEventsList from "../assets/EventsData";


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const isLandscape = this.state.width > this.state.height ? true : false;
        if (isTablet) {
            if (isLandscape) {
                return (
                <div>
                    <HomeDesktop/>
                </div>
                );
            } else {
                return (
                    <div>
                        <HomeMobile isLandscape={isLandscape}/>
                    </div>
                );
            }
        } else if (isMobile) {
                return (
                    <div>
                        <HomeMobile isLandscape={isLandscape}/>
                    </div>
                );
            } else {
                return (
                    <div>
                        <HomeDesktop/>
                    </div>
                );
            }
    }
}

export default withOrientationChange(Index);