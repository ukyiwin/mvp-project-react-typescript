import * as React from 'react';

export default class PopoverLink extends React.Component {

  timeoutID: NodeJS.Timer;

  state = {
    showPopover: false,
    user: null,
    position: null
  };
  // tslint:disable-next-line:typedef
  constructor(props) {
    super(props);

    this.state = { showPopover: false, user: null, position: null };
  }

  render () {
    return (
      <span 
        className="popover-link uk-text-bold"
        onMouseEnter={() => this.handleMouseEnter.bind(this)} 
        onMouseLeave={() => this.handleMouseLeave.bind(this)}
      >
        <a href={'#'}>
          {this.props.children}
        </a>
        {this.renderPopover()}
      </span>
    );
  }

  renderPopover() {
    if (this.state.showPopover) {
      return (
        <div />
      );
    } else {
      return;
    }
  }

  handleMouseEnter = (event) => {
    let position;
    const POPOVER_HEIGHT = 200;
    if ( POPOVER_HEIGHT + 30 > event.clientY) {
      position = 'bottom';
    } else {
      position = 'top';
    }
    this.timeoutID = setTimeout(() => {
      this.setState({ user: {}, showPopover: true, position: position });
    },                          450);
  }

  // tslint:disable-next-line:typedef
  handleMouseLeave(event) {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
      // this.timeoutID = null;
    }
    setTimeout(() => { this.setState({ showPopover: false, position: null }); }, 180);
  }
}