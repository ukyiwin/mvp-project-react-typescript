import * as React from 'react';

type Props = {
  text: string,
  overlayHeading: string,
};

export default class OverlayTriggerButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleOpenClick = this.handleOpenClick.bind(this);
  }

  render () {
    return (
      <span>
        <span dangerouslySetInnerHTML={{__html: this.props.text}} onClick={this.handleOpenClick}/>
      </span>
    );
  }

  // tslint:disable-next-line:typedef
  handleOpenClick(event) {
    /* Notify UserOverlay component
    PubSub.publish('OverlayTriggerButton:onClick', {
      endpoint: this.props.apiEndpoint,
      overlayHeading: this.props.overlayHeading
    }); 
    */
  }

}