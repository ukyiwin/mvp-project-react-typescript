import React, { Component } from 'react';
import { ScrollableFlexRow } from './style';

class ScrollRow extends Component<any> {
  hscroll: any;
  state = {
    scrollPos: null,
  };

  componentDidMount() {
    const node = this.hscroll;
    node.scrollLeft = this.state.scrollPos;

    // tslint:disable-next-line:one-variable-per-declaration
    let x, left, down;
    node.addEventListener('mousemove', (e) => {
      if (down) {
        const newX = e.pageX;
        node.scrollLeft = left - newX + x;
      }
    });

    node.addEventListener('mousedown', (e) => {
      e.preventDefault();

      down = true;
      x = e.pageX;
      left = node.scrollLeft;
    });

    node.addEventListener('mouseup', (e) => {
      down = false;

      if (e.target.id) {
        this.setState({
          scrollPos: left - e.pageX + x,
        });
      }
    });

    node.addEventListener('mouseleave', (e) => {
      down = false;
    });
  }

  render() {
    return (
      <ScrollableFlexRow
        className={this.props.className}
        innerRef={(comp) => this.hscroll = comp}
      >
        {this.props.children}
      </ScrollableFlexRow>
    );
  }
}

export default ScrollRow;
