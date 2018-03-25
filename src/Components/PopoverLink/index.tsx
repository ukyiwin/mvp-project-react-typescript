import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    link: string;
    bigger?: boolean;
}

export default class PopoverLink extends React.Component<Props> {

    state = {
        showPopover: false,
        user: null,
        position: null,
    };
    // tslint:disable-next-line:typedef
    constructor(props) {
        super(props);

        this.state = { showPopover: false, user: null, position: null };
    }

    render() {
        const styleIt = this.props.bigger ? { fontSize: 17 } : {};

        return (
            <span
                className="popover-link uk-text-bold"
                onMouseEnter={() => this.handleMouseEnter.bind(this)}
                onMouseLeave={() => this.handleMouseLeave.bind(this)}
            >
                <Link to={`/${this.props.link}`} className="card-title" style={styleIt}>
                    {this.props.children}
                </Link>
                {this.renderPopover()}
            </span>
        );
    }

    renderPopover() {
        if (this.state.showPopover) {
            return <div />;
        } else {
            return null;
        }
    }

    handleMouseEnter = (event) => {
        // let position = 'top';
        // const POPOVER_HEIGHT = 200;
        // tslint:disable-next-line:prefer-conditional-expression
        // if (POPOVER_HEIGHT + 30 > event.clientY) {
        // position = 'bottom';
        // } else {
        // position = 'top';
        // }
        // this.timeoutID = setTimeout(() => {
        // this.setState({ user: {}, showPopover: true, position });
        // },                          450);
    }

    // tslint:disable-next-line:typedef
    handleMouseLeave(event) {
        // if (this.timeoutID) {
            // clearTimeout(this.timeoutID);
            // this.timeoutID = null;
        // }
        // setTimeout(() => { this.setState({ showPopover: false, position: null }); }, 180);
    }
}
